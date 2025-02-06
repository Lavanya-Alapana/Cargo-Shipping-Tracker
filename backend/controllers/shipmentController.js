const Shipment = require('../models/shipmentModel');

// Retrieve all shipments
const getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving shipments', error });
  }
};

// Retrieve specific shipment
const getShipmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const shipment = await Shipment.findById(id);
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving shipment', error });
  }
};

// Update shipment location
const updateShipmentLocation = async (req, res) => {
  const { id } = req.params;
  const { currentLocation } = req.body;
  try {
    const shipment = await Shipment.findByIdAndUpdate(id, { currentLocation }, { new: true });
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating shipment location', error });
  }
};

// Retrieve estimated time of arrival (ETA)
const getEta = async (req, res) => {
  const { id } = req.params;
  try {
    const shipment = await Shipment.findById(id);
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
    res.status(200).json({ eta: shipment.currentEta });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving ETA', error });
  }
};

// Create new shipment
const createShipment = async (req, res) => {
  const { containerId, route, currentLocation, currentEta, status } = req.body;
  try {
    const newShipment = new Shipment({
      containerId,
      route,
      currentLocation,
      currentEta,
      status,
    });
    await newShipment.save();
    res.status(201).json(newShipment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating shipment', error });
  }
};

module.exports = {
  getAllShipments,
  getShipmentById,
  updateShipmentLocation,
  getEta,
  createShipment,
};
