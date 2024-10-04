import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import cartReducer from './CartSlice'; // Import the cart reducer from CartSlice.jsx

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Associate the cart reducer with the 'cart' slice of the state
  },
});

// Export the configured Redux store
export default store;
