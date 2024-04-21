import {ActionsCounterType} from "./actions.ts";

export type counterStateType = {
  count: string;
  inputMin: string;
  inputMax: string;
  min: string;
  max: string;
  isErrorMin: boolean;
  isErrorMax: boolean;
};

const initialState: counterStateType  = {
  count: '0',
  inputMin: '',
  inputMax: '',
  min: '',
  max: '',
  isErrorMin: false,
  isErrorMax: false
};

export const counterReducer = (state: counterStateType = initialState, action: ActionsCounterType): counterStateType => {
  switch (action.type) {
    case 'INCREMENT':
      if(!state.max || state.max > state.count) {
        return {...state, count: String(+state.count + 1)}
      } else {
        return state;
      }
    case 'DECREMENT':
      return {...state, count: String(+state.count - 1)};
      case 'RESET':
        return {...state, count: state.min || '0'};
    case 'CHANGE_MIN':
      return {...state, inputMin: action.min, isErrorMin: false};
    case 'CHANGE_MAX':
      return {...state, inputMax: action.max, isErrorMax: false};
    case 'SET_MIN':
      if(state.inputMin && (!state.max || state.max > state.inputMin)){
        return {...state, min: state.inputMin, count: state.inputMin};
      } else {
        return {...state, isErrorMin: true}
      }
    case 'SET_MAX':
      if(state.inputMax && (!state.min || state.min < state.inputMax)){
        return {...state, max: state.inputMax};
      } else {
        return {...state, isErrorMax: true}
      }
    default:
      return state;
  }
}