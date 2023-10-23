import { createSlice, PayloadAction } from "@reduxjs/toolkit"
type InitialState={
  numberOfCakes:number
}


const initialState: InitialState= {
  numberOfCakes:20
}

const cakeSlice = createSlice(
  {
    initialState,
    name:'cakes',
    reducers:{
      orderCake:(state)=>{
        state.numberOfCakes--
      },
      stockCakes:(state, action: PayloadAction<number>)=>{
        state.numberOfCakes+=action.payload
      }
    }
  }
)
export default cakeSlice.reducer
export const {orderCake, stockCakes}= cakeSlice.actions