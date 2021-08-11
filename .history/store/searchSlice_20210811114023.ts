import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {searchTermState} from "./searchTermInterface"

// Define the initial state using that type
const initialState: searchTermState = {
  term: ""
}

export const counterSlice = createSlice({
  name: 'searchTerm',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTerm: (state:searchTermState, action: PayloadAction<string>) => {
      state.term = action
    },
    decrement: state => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer