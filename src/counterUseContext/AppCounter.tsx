import CounterDisplay from "./components/counterDisplay/CounterDisplay.tsx";
import {counterContext} from './state/counterContext.ts';
import {useReducer} from "react";
import {counterReducer, initialState} from "./state/counterReducer.ts";

function AppCounter() {
  const [counter, dispatch] = useReducer(counterReducer, initialState);
  return (
      <div>
        <counterContext.Provider value={{counter, dispatch}}>
          <CounterDisplay/>
        </counterContext.Provider>
      </div>
  );
}

export default AppCounter;