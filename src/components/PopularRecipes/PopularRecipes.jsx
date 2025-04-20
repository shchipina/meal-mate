import { usePopularRecipes } from "../../hooks/useRecipes";
import { PopularCard } from "./PopularCard";
import { Skeleton } from "./Skeleton";

export const PopularRecipes = () => {
  const { data, isLoading, isError } = usePopularRecipes();

  if (isError) {
    return <h2>Opps...error😧</h2>
  }

  return (
    <section className="py-[80px]">
      <h2 className="text-[32px] mb-7">Popular recipes</h2>

      <div className="grid gap-6 grid-col-1 lg:grid-cols-3 md:grid-cols-2">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))
        ) : (
          data?.map(item => (
            <PopularCard item={item} key={item.idMeal} />
          ))
        )}
      </div>
    </section>
  );
}