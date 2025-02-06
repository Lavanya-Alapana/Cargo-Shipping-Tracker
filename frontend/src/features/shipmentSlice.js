import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shipments: [], // ✅ Ensure this is defined as an array
};

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    setShipments: (state, action) => {
      state.shipments = action.payload;
    },
    addShipment: (state, action) => {
      state.shipments.push(action.payload);
    },
  },
});

export const { setShipments, addShipment } = shipmentSlice.actions;
export default shipmentSlice.reducer;
