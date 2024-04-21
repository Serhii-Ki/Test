import { Provider } from "react-redux";
import {store} from "./store/store.ts";

import styles from './counterApp.module.css';
import CounterDisplay from "./components/counterDisplay/CounterDisplay.tsx";

function CounterApp() {
  return (
      <Provider store={store}>
        <div className={styles['main-wrapper']}>
          <CounterDisplay/>
        </div>
      </Provider>

  );
}

export default CounterApp;