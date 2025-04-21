import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/api.js";
import { useQuery } from "@tanstack/react-query";

export const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipeById"],
    queryFn: () => getRecipeById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong 😢</p>;

  const meal = data.meals[0];

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

  console.log('img ', strMealThumb)

  return (
    <section>
      <h3 className="text-[22px] uppercase text-[#EE6352] font-medium">{strMeal}</h3>
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

            <button className="p-2 rounded-3xl border border-amber-600">
              Add to favorites
            </button>
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

      <div>
        <h4>Watch the video recipe</h4>
        <iframe src={strYoutube} frameborder="0"></iframe>
      </div>
    </section>
  )
}
