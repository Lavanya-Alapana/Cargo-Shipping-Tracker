const express = require('express');
const shipmentController = require('../controllers/shipmentController');

const router = express.Router();

// Define routes for shipment endpoints
router.get('/shipment', shipmentController.getAllShipments);
router.get('/shipment/:id', shipmentController.getShipmentById);
router.post('/shipment/:id/update-location', shipmentController.updateShipmentLocation);
router.get('/shipment/:id/eta', shipmentController.getEta);
router.post('/shipment', shipmentController.createShipment);

module.exports = router;
