import { FETCH_SHIPMENTS, ADD_SHIPMENT, UPDATE_SHIPMENT_LOCATION } from './shipmentActions';

const initialState = {
  shipments: [],
};

const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload };
    case ADD_SHIPMENT:
      return { ...state, shipments: [...state.shipments, action.payload] };
    case UPDATE_SHIPMENT_LOCATION:
      return {
        ...state,
        shipments: state.shipments.map((shipment) =>
          shipment._id === action.payload._id ? action.payload : shipment
        ),
      };
    default:
      return state;
  }
};

export default shipmentReducer;
