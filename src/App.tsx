import { RouterProvider } from "react-router-dom";
import { router } from "./pizzaShop/router/routs.tsx";
import { Provider } from "react-redux";
import { store } from "./pizzaShop/store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
