import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {sidebarState} from "./sidebarInterface"

// Define the initial state using that type
const initialState: sidebarState = {
  open: false
}

export const sidebar = createSlice({
  name: 'sidebar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeOpen: (state:sidebarState) => {
      state.open = !state.open
    },
  }
})

export const { changeOpen} = sidebar.actions

// Other code such as selectors can use the imported `RootState` type
export const getTerm = (state: RootState) => state.sidebar.term

export default sidebar.reducer