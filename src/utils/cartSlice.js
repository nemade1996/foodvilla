import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            const item = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem : (state, action) =>{
            const index = state.items.findIndex(item => item.card.info.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearCart : (state) =>{
            state.items.length = 0;
        },
        decreaseItemQuantity: (state, action) => {
            const item = state.items.find(item => item.card.info.id === action.payload.id);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            } else if (item) {
              const index = state.items.findIndex(item => item.card.info.id === action.payload.id);
              state.items.splice(index, 1);
            }
          }
    },
})

export const {addItem , removeItem , clearCart , decreaseItemQuantity} = cartSlice.actions;


export default cartSlice.reducer;