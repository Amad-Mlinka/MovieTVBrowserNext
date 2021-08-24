import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {searchTermState} from "../interfaces/searchTermInterface"

// Define the initial state using that type
const initialState: searchTermState = {
  term: ""
}

export const searchSlice = createSlice({
  name: 'searchTerm',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTerm: (state:searchTermState, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    resetTerm: (state:searchTermState) => {
        state = initialState
      },
  }
})

export const { changeTerm, resetTerm } = searchSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getTerm = (state: RootState) => state.searchTerm.term

export default searchSlice.reducer