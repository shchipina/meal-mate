import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/api.js";
import { useQuery } from "@tanstack/react-query";

// import { useFavorite } from "../hooks/useFavorite.js"

import ReactPlayer from 'react-player/youtube'
import { FavoriteButton } from "../ui/FavoriteButton.jsx";

export const RecipeDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipeById", id],
    queryFn: () => getRecipeById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong 😢</p>;

  const meal = data.meals[0];

  // const { isFavorite, toggleFavorite } = useFavorite(meal);

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = meal;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push({ ingredient, measure })
    }
  }

  return (
    <section className="mb-10">
      <h3 className="text-[22px] uppercase text-[#EE6352] font-medium">
        {strMeal}
      </h3>
      <div className="grid grid-cols-1 gap-10  md:grid-cols-2 my-[36px]">
        <div className="rounded-4xl max-w-[560px] max-h-[350px] overflow-hidden shadow-2xl">
          <img
            src={strMealThumb}
            alt={strMeal}
            title={strMeal}
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-[18px] uppercase text-[#EE6352]">
              Ingredients 🌾
            </h4>

            {/* <button
              className="p-2 rounded-3xl border border-amber-600"
              onClick={toggleFavorite}
            >
              {isFavorite ? "Added to Favorite" : "Add to Favorite"}
            </button> */}
              <FavoriteButton item={meal} />
          </div>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>
                <span className="font-medium opacity-70">{ingredient.ingredient}:</span> {ingredient.measure}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-amber-50 rounded-2xl p-3">
        <h4 className="my-3 text-[18px] uppercase text-[#EE6352]">
          Instruction 📑
        </h4>
        <p className="text-[#333] mb-3">
          {strInstructions}
        </p>
        <p>
          <span className="font-medium text-[#333]">🪃 Category:</span> {strCategory}
        </p>
        <p>
          <span className="font-medium text-[#333]">🌎 Meal from:</span> {strArea}
        </p>
      </div>

      {strYoutube && (
        <div>
          <h4 className="text-[18px] text-center font-medium uppercase text-[#EE6352] my-6 pt-6 border-t-2 border-[#EE6352]">
            Watch the video recipe 🍳
          </h4>

          <div className="max-w-[560px] mx-auto rounded-2xl overflow-hidden">
            <ReactPlayer
              light
              controls={true}
              url={strYoutube}
              width="100%"
              height="240px"
              playing
            />
          </div>
        </div>
      )}
    </section>
  )
}
