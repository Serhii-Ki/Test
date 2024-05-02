import {ActionsType} from "./actions.ts";


type initialStateType = {
  min: number;
  max: number | null;
  count: number;
}

const initialState: initialStateType = {
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
    default:
      return state;
  }
}