import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";
import { pizzaRequest } from "../services/pizzaRequest.ts";

type InitialStateType = {
  id: number;
  title: string;
  imageUrl: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

const slice = createSlice({
  name: "pizza",
  initialState: [] as InitialStateType[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizza.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

const getPizza = createAsyncThunk<InitialStateType[], void>(
  `${slice.name}/getPizza`,
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await pizzaRequest().getPizza();
      console.log(res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const pizzaReducer = slice.reducer;

export const pizzaPath = slice.reducerPath;

export const pizzaThunk = { getPizza };

export const selectedPizza = (state: RootState) => state.pizza;
