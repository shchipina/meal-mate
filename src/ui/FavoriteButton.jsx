import { useDispatch, useSelector } from "react-redux";
import { addRecipe, removeRecipe } from "../features/favorites/favoritesSlice";

import { MdFavoriteBorder } from "react-icons/md";
import { FcLike } from "react-icons/fc";

export const FavoriteButton = ({ item }) => {
  const recipes = useSelector(state => state.favorites.recipes);
  const dispatch = useDispatch();

  const isFavorite = recipes.find(recipe => recipe.idMeal === item.idMeal);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeRecipe(item.idMeal));
    } else {
      dispatch(addRecipe(item));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer "
    >
      {isFavorite
        ? <FcLike size={25} />
        : <MdFavoriteBorder size={25} />
      }
    </button>
  );
}
