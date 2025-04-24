import { usePopularRecipes } from "../hooks/useRecipes";
import { RecipeCard } from "./RecipeCard/RecipeCard";
import { Skeleton } from "./RecipeCard/Skeleton";

export const PopularRecipes = () => {
  const { data, isLoading, isError } = usePopularRecipes();

  if (isError) {
    return <h2>Opps...error😧</h2>
  }

  return (
    <section className="py-[80px]">
      <h2 className="text-[32px] mb-7">Popular recipes</h2>

      <div className="grid gap-6 place-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))
        ) : (
          data?.map(meal => (
            <RecipeCard item={meal} key={meal.idMeal} />
          ))
        )}
      </div>
    </section>
  );
}