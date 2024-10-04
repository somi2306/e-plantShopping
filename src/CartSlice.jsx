import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment the quantity if the item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add the item if it doesn't exist
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity if the item exists
      }
    },
  },
});

// Export actions to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default to be used in the store
export default CartSlice.reducer;
