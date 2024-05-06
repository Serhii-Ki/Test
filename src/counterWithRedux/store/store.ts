import {combineReducers, legacy_createStore} from "redux";
import reducer from "./reducer.ts";


const rootReducer = combineReducers({
  counter: reducer
});

export const store = legacy_createStore(combineReducers);

export type AppRootStateType = ReturnType<typeof rootReducer>;