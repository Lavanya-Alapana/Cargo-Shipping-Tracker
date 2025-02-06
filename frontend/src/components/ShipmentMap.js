import React from 'react';

const ShipmentTable = ({ shipments }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Container ID</th>
          <th>Current Location</th>
          <th>ETA</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment) => (
          <tr key={shipment._id}>
            <td>{shipment._id}</td>
            <td>{shipment.containerId}</td>
            <td>{shipment.currentLocation}</td>
            <td>{new Date(shipment.currentEta).toLocaleString()}</td>
            <td>{shipment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShipmentTable;
