import { storeInterface } from "./storeInterface";
import * as storeActions from "./storeActions"

const initialState:storeInterface = {
    searchTerm:" ",
    sidebar:false
  }
  
  export const reducer = (state:storeInterface = initialState, action:string[]) => {
    switch (action.type) {
      case 'CLOSE':
        return {
          ...state,
          sidebar:false
        }
      case 'OPEN':
        return {
          ...state,
          sidebar:true,
        }
      case 'CHANGETERM':
        return {
          ...state,
          searchTerm: action.payload
        }
      case 'RESETTERM':
        return {
          ...state,
          searchTerm: initialState.searchTerm,
        }
      default:
        return state
    }
  }