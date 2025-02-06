const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    containerId: { type: String, required: true },
    route: { type: [String], required: true },
    currentLocation: { type: String, required: true },
    currentEta: { 
      type: Date, 
      required: true, 
      set: (val) => new Date(val)  // Ensures it's stored as a Date type
    },
    status: {
      type: String,
      enum: ['Pending', 'In Transit', 'Delivered'],  // Ensure this is properly defined
      required: true
    }
  });
  
const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;
