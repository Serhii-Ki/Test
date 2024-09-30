import { createBrowserRouter, Navigate } from "react-router-dom";
import AppPizza from "../AppPizza.tsx";
import MainPage from "../pages/mainPage/MainPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPizza />,
    children: [
      {
        path: "/",
        element: <Navigate to="pizza" />,
      },
      {
        path: "pizza",
        element: <MainPage />,
      },
    ],
  },
]);
