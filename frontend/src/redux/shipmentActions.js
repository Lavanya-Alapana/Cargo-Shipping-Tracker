import axios from 'axios';

// Action types
export const FETCH_SHIPMENTS = 'FETCH_SHIPMENTS';
export const ADD_SHIPMENT = 'ADD_SHIPMENT';
export const UPDATE_SHIPMENT_LOCATION = 'UPDATE_SHIPMENT_LOCATION';

// Fetch all shipments
export const fetchShipments = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/shipments');
    dispatch({ type: FETCH_SHIPMENTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching shipments:", error);
  }
};

// Add new shipment
export const addShipment = (shipment) => async (dispatch) => {
  try {
    const response = await axios.post('/api/shipment', shipment);
    dispatch({ type: ADD_SHIPMENT, payload: response.data });
  } catch (error) {
    console.error("Error adding shipment:", error);
  }
};

// Update shipment location
export const updateShipmentLocation = (id, location) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/shipment/${id}/update-location`, { currentLocation: location });
    dispatch({ type: UPDATE_SHIPMENT_LOCATION, payload: response.data });
  } catch (error) {
    console.error("Error updating shipment location:", error);
  }
};
