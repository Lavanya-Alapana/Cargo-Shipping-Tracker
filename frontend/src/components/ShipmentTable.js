import React from "react";
const ShipmentTable = ({ shipments }) => {
  if (!Array.isArray(shipments)) {
    return <p>Shipments data is not in the correct format.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Container ID</th>
          <th>Route</th>
          <th>Current Location</th>
          <th>Current ETA</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {shipments.length === 0 ? (
          <tr>
            <td colSpan="5">No shipments available.</td>
          </tr>
        ) : (
          shipments.map((shipment, index) => (
            <tr key={index}>
              <td>{shipment.containerId}</td>
              <td>{shipment.route.join(", ")}</td>
              <td>{shipment.currentLocation}</td>
              <td>{new Date(shipment.currentEta).toLocaleString()}</td>
              <td>{shipment.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};


export default ShipmentTable;
