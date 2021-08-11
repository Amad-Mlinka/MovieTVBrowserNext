import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {sidebarState} from "./sidebarInterface"

// Define the initial state using that type
const initialState: sidebarState = {
  open: false
}

export const searchSlice = createSlice({
  name: 'searchTerm',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeOpen: (state:sidebarState, action: PayloadAction<boolean>) => {
      state.open = !state.open
    },
  }
})

export const { changeOpen} = searchSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getTerm = (state: RootState) => state.searchTerm.term

export default searchSlice.reducer