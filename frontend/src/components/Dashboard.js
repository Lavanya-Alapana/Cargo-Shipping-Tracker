import React, { useState, useEffect } from "react";
import ShipmentForm from "./ShipmentForm";
import ShipmentTable from "./ShipmentTable";

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);

  // Fetch shipments from the backend
  const fetchShipments = async () => {
    try {
      const response = await fetch("http://localhost:5000/shipments");
      const data = await response.json();
      console.log("Fetched Shipments:", data); // Check what is being fetched
  
      // Check if data is an array
      if (Array.isArray(data)) {
        setShipments(data); // Set the shipments state if it's an array
      } else {
        console.error("Fetched data is not an array:", data);
        setShipments([]); // Reset if the data is not an array
      }
    } catch (error) {
      console.error("Error fetching shipments:", error);
      setShipments([]); // Set to empty array on error
    }
  };
  
  // Trigger re-fetch of shipments after adding a new one
  const handleAddShipment = () => {
    fetchShipments(); // Refresh the shipments data after adding a new shipment
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Pass handleAddShipment to ShipmentForm */}
      <ShipmentForm onAddShipment={handleAddShipment} />
      <ShipmentTable shipments={shipments} />
    </div>
  );
};

export default Dashboard;
