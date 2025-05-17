import { configureStore, ThunkAction, Middleware } from "@reduxjs/toolkit";
import { Action } from "redux";

import { baseApi } from "@/services/base";
import favourites from "@/slices/favourites";

const middlewares: Middleware[] = [baseApi.middleware];

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [favourites.name]: favourites.reducer,
  },

  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(middlewares),
});

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
