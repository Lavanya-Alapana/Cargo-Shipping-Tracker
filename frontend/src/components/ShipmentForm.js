import React, { useState } from "react";

const ShipmentForm = ({ onAddShipment }) => {
  const [formData, setFormData] = useState({
    containerId: "",
    route: "",
    currentLocation: "",
    currentEta: "",
    status: "Pending", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shipmentData = {
      containerId: formData.containerId,
      route: formData.route.split(", "), // Split the route input by commas
      currentLocation: formData.currentLocation,
      currentEta: new Date(formData.currentEta), // Ensure it's in Date format
      status: formData.status,
    };

    try {
      const response = await fetch("http://localhost:5000/shipments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipmentData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Shipment added:", data);
        if (onAddShipment) {
          onAddShipment(); // Call the passed function to refresh the shipment list
        }
        setFormData({
          containerId: "",
          route: "",
          currentLocation: "",
          currentEta: "",
          status: "Pending",
        });
      } else {
        const errorData = await response.json();
        console.error("Error adding shipment:", errorData);
      }
    } catch (error) {
      console.error("Error adding shipment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Container ID:</label>
        <input
          type="text"
          name="containerId"
          value={formData.containerId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Route (comma-separated):</label>
        <input
          type="text"
          name="route"
          value={formData.route}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Current Location:</label>
        <input
          type="text"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Current ETA (YYYY-MM-DDTHH:MM:SSZ):</label>
        <input
          type="datetime-local"
          name="currentEta"
          value={formData.currentEta}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Pending">Pending</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      <button type="submit">Add Shipment</button>
    </form>
  );
};

export default ShipmentForm;
