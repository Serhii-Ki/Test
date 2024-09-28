import { RouterProvider } from "react-router-dom";
import { router } from "./pizzaShop/router/routs.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
