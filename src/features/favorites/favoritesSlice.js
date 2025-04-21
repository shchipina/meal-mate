import { createSlice } from "@reduxjs/toolkit";

const storedFavorite = localStorage.getItem('favorites');

const initialState = {
  recipes: storedFavorite ? JSON.parse(storedFavorite) : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      const recipe = action.payload;
      const alreadyAdded = state.recipes.find(r => r.idMeal === recipe.idMeal);

      if (!alreadyAdded) {
        state.recipes.push(action.payload);
      }
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(recipe => (
        recipe.idMeal !== action.payload
      ))
    }
  }
});

export const { addRecipe, removeRecipe } = favoritesSlice.actions;
export default favoritesSlice.reducer;