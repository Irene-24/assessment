import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  postMap: Record<number, true>;
}

const initialState: FavouritesState = {
  postMap: {},
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<number>) {
      state.postMap[action.payload] = true;
    },
    removeFavourite(state, action: PayloadAction<number>) {
      delete state.postMap[action.payload];
    },
    toggleFavourite(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.postMap[id]) {
        delete state.postMap[id];
      } else {
        state.postMap[id] = true;
      }
    },
  },
  selectors: {
    getFavourites: (state) => state.postMap,
  },
});

export const { addFavourite, removeFavourite, toggleFavourite } =
  favouritesSlice.actions;

export const { getFavourites } = favouritesSlice.selectors;

export default favouritesSlice;
