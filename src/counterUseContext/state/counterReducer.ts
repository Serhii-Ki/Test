import {ActionsType} from "./actions.ts";


export type initialStateType = {
  min: number;
  max: number | null;
  count: number;
}

export const initialState: initialStateType = {
  min: 0,
  max: null,
  count: 0
}

export const counterReducer = (state = initialState, action: ActionsType) => {
  switch (action.type){
    case "INCR":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECR":
      return {
       ...state,
        count: state.count - 1
      }
    case "RESET":
      return {
       ...state,
        count: state.min
      }
    case "SET_COUNT":
      return {
       ...state,
        count: action.payload
      }
    case "SET_MIN":
      return {
       ...state,
        min: action.payload
      }
    case "SET_MAX":
      return {
       ...state,
        max: action.payload
      }
    default:
      return state;
  }
}