import MainDisplay from "./components/mainDisplay/MainDisplay.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import styles from './appCounterRedux.module.css';


function AppCounterRedux() {
  return (
      <Provider store={store}>
        <div className={styles['mainWrapper']}>
          <h1>My counter</h1>
          <MainDisplay/>
        </div>
      </Provider>
  );
}

export default AppCounterRedux;