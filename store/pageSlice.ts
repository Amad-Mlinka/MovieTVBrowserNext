import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pageInterface } from '../interfaces/pageInterface'
import type { RootState } from './store'


// Define the initial state using that type
const initialState: pageInterface = {
  pageNumber:1
}

export const pageSlice = createSlice({
  name: 'pageNumber',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    jumpPage: (state:pageInterface, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    }    
  }
})

export const { jumpPage } = pageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getPage = (state: RootState) => state.pageNumber.pageNumber

export default pageSlice.reducer