import { useDispatch, useSelector } from "react-redux";
import { addRecipe, removeRecipe } from "../features/favorites/favoritesSlice";

export const useFavorite = (item) => {
  const recipes = useSelector(state => state.favorites.recipes);
  const dispatch = useDispatch();

  const isFavorite = item && recipes.some(recipe => {
    recipe.idMeal === item.idMeal
  });

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeRecipe(item.idMeal));
    } else {
      dispatch(addRecipe(item));
    }
  };

  return { isFavorite, toggleFavorite };
}
