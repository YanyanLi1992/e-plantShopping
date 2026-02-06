import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // cart items live here
  },
  reducers: {
    // Add a plant to cart (or increment if it already exists)
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove a plant from cart by name
    removeItem: (state, action) => {
      // Expect payload like: { name: "Snake Plant" }
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },

    // Update quantity for a specific plant by name
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators for components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;
