import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import axios, { AxiosError } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// Types
type NullableType<T> = null | T;
type LoginFieldsType = {
  email: string;
  password: string;
};
// API
const instance = axios.create({
  baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/",
});
const api = {
  login(data: LoginFieldsType) {
    return instance.post("auth/login", data);
  },
};
// Reducer
const initState = {
  isLoading: false,
  error: null as NullableType<string>,
  isLoggedIn: false,
};
type InitStateType = typeof initState;
const appReducer = (
  state: InitStateType = initState,
  action: ActionsType,
): InitStateType => {
  switch (action.type) {
    case "APP/SET-IS-LOGGED-IN":
      return { ...state, isLoggedIn: action.isLoggedIn };
    case "APP/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    case "APP/SET-ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};
// Actions
const setIsLoggedIn = (isLoggedIn: boolean) =>
  ({ type: "APP/SET-IS-LOGGED-IN", isLoggedIn }) as const;
const setLoadingAC = (isLoading: boolean) =>
  ({ type: "APP/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) =>
  ({ type: "APP/SET-ERROR", error }) as const;
type ActionsType =
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>;
// Thunk
const loginTC =
  (values: LoginFieldsType): AppThunk =>
  (dispatch) => {
    dispatch(setLoadingAC(true));
    api
      .login(values)
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        alert("Вы залогинились успешно");
      })
      .catch((e) => {
        console.log(e);
        dispatch(setError(e.response.data.errors));
      })
      .finally(() => {
        dispatch(setLoadingAC(false));
      });
  };
// Store
const rootReducer = combineReducers({
  app: appReducer,
});
const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionsType
>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};
// App
export const App = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<LoginFieldsType>({
    email: "",
    password: "",
  });
  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const changeFormValuesHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    if (field === "email") {
      setForm({ ...form, email: e.currentTarget.value });
    }
    if (field === "password") {
      setForm({ ...form, password: e.currentTarget.value });
    }
  };
  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginTC(form));
  };
  return (
    <div>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      <form>
        <div>
          <input
            placeholder={"Введите email"}
            value={form.email}
            onChange={(e) => changeFormValuesHandler(e, "email")}
          />
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"Введите пароль"}
            value={form.password}
            onChange={(e) => changeFormValuesHandler(e, "password")}
          />
        </div>
        <button type="submit" onClick={submitForm}>
          Залогиниться
        </button>
      </form>
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
