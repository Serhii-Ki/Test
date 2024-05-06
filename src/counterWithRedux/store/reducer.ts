import {ActionsType} from "./actions.ts";

export type StateType = {
  min: number;
  max: number | null;
  count: number;
}

const initialState: StateType ={
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
    default:
      return state;
  }
}

export default reducer