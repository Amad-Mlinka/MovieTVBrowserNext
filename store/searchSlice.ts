import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchTermState } from "../interfaces/searchTermInterface";

// Define the initial state using that type
const initialState: searchTermState = {
  term: "",
  genre: "",
  rating: "",
  sort:"",
  order:"asc"
};

export const searchSlice = createSlice({
  name: "searchTerm",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTerm: (state: searchTermState, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    resetTerm: (state: searchTermState) => {
      state.term = initialState.term;
    },

    changeGenre: (state: searchTermState, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    resetGenre: (state: searchTermState) => {
      state.genre = initialState.genre;
    },

    changeRating: (state: searchTermState, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },
    resetRating: (state: searchTermState) => {
      state.rating = initialState.rating;
    },

    changeSort: (state: searchTermState, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    resetSort: (state: searchTermState) => {
      state.sort = initialState.sort;
    },
    changeOrder: (state: searchTermState) => {
      state.order = state.order=="asc" ? "desc" : "asc";
    },

    
  },
});

export const {
  changeTerm,resetTerm,
  changeGenre,resetGenre,
  changeRating,resetRating,
  changeSort,resetSort,changeOrder
} = searchSlice.actions;


export default searchSlice.reducer;
