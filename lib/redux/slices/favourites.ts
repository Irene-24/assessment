import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  postIds: Set<number>;
}

const initialState: FavouritesState = {
  postIds: new Set([1]), // you can pre-fill with some test favorites
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<number>) {
      state.postIds.add(action.payload);
    },
    removeFavourite(state, action: PayloadAction<number>) {
      state.postIds.delete(action.payload);
    },
    toggleFavourite(state, action: PayloadAction<number>) {
      if (state.postIds.has(action.payload)) {
        state.postIds.delete(action.payload);
      } else {
        state.postIds.add(action.payload);
      }
    },
  },
});

export const { addFavourite, removeFavourite, toggleFavourite } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
