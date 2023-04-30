import { createSlice } from "@reduxjs/toolkit";

export const countReducer = createSlice({
  name : 'selectedOrder',
  initialState : {
    count : 0
  },
  reducer : {
    setSelectedOrder : (state, actions) => {
      state.selectedOrder = actions.payload;
    }
  }
});

export const { setSelectedOrder } = countReducer.actions;

export default countReducer.reducer;