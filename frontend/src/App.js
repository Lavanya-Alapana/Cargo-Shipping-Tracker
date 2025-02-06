// src/App.js
import React from 'react';
import ShipmentForm from './components/ShipmentForm';
import ShipmentTable from './components/ShipmentTable';

const App = () => {
  return (
    <div>
      <h1>Cargo Shipment Tracker</h1>
      <ShipmentForm />
      <ShipmentTable />
    </div>
  );
};

export default App;
