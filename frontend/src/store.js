import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from './features/shipmentSlice'; // ✅ Ensure correct import

const store = configureStore({
  reducer: {
    shipment: shipmentReducer, // ✅ Ensure this matches the slice name
  },
});

export default store;
