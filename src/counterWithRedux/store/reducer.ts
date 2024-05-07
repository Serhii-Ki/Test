import {ActionsType} from "./actions.ts";

export type StateType = {
  min: number;
  max: number | null;
  count: number;
}

const initialState: StateType = {
  min: 0,
  max: null,
  count: 0
}

function reducer(state: StateType = initialState, actions: ActionsType){
  switch (actions.type){
    case 'INCR':
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
    case "SET_MIN":
      return {
       ...state,
        min: actions.payload
      }
    case "SET_MAX":
      return {
       ...state,
        max: actions.payload
      }
    case "SET_COUNT":
      return {
       ...state,
        count: actions.payload
      }
    default:
      return state;
  }
}

export default reducer