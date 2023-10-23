import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState={
  numberOfIcecreams:number
}

const initialState:  InitialState= {
  numberOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  initialState,
  name: "icecreams",
  reducers: {
    orderCreams: (state) => {
      state.numberOfIcecreams--;
    },
    stockCreams: (state, action: PayloadAction<number>) => {
      state.numberOfIcecreams += action.payload;
    },
  },
});
export default icecreamSlice.reducer;
export const { orderCreams, stockCreams } = icecreamSlice.actions;
