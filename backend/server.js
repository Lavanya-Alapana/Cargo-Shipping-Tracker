const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Shipment = require('./models/shipmentModel'); // Ensure this file exists
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json()); // ✅ Middleware to parse JSON requests

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

  app.get('/',(req,res)=>{
    res.send('getting request')
  })
  
app.use(cors()); // Allow all origins

// ✅ POST route for creating a shipment
app.post('/shipments', async (req, res) => {
    try {
      const { containerId, route, currentLocation, currentEta, status } = req.body;
      console.log("Received Data:", { containerId, route, currentLocation, currentEta, status });
      const newShipment = new Shipment({ containerId, route, currentLocation, currentEta, status });
      await newShipment.save();
      res.status(201).json({ message: "Shipment created successfully", shipment: newShipment });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  });
  
// ✅ Default 404 handler (if route is incorrect)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
