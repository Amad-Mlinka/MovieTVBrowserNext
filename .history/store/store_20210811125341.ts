import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import sidebarSlice from "./sidebarSlice"

const rootReducer = combineReducers({search: searchSlice, sidebar: sidebarSlice})

 const store:any = configureStore({
  reducer: {
    reducer: rootReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

