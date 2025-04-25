import { useState } from "react";
import cn from "classnames";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCategories, getMealsByCategory } from "../services/api";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import { Skeleton } from "../components/RecipeCard/Skeleton";

export const Recipes = () => {
  const [categoryActive, setCategoryActive] = useState("Beef");
  const { data, isLoading, isError } = useQuery({
      queryKey: ["category"],
      queryFn: getCategories,
    });

  const {
    data: meals,
    isLoading: mealLoading,
    isError: mealError,
    isFetching
  } = useQuery({
    queryKey: ["meals", categoryActive],
    queryFn: () => getMealsByCategory(categoryActive),
    enabled: !!categoryActive,
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <h1>Loading categories...</h1>;

  if (isError) return <h1>Error loading categories...</h1>;

  if (mealError) return <h1>Error loading meals...</h1>;

  const isMealLoading = mealLoading || isFetching;

  return (
    <section>
      <div className="custom-scroll max-w-[1200px] overflow-scroll overflow-x-auto overflow-y-hidden p-5">
        <ul className="flex gap-3">
          {data.categories?.map(category => (
            <li key={category.idCategory}>
              <button
                onClick={() => setCategoryActive(category.strCategory)}
                className={cn("border border-b-[#262522] opacity-60 rounded-3xl px-[24px] py-[6px] uppercase hover:opacity-100 cursor-pointer", {
                  "bg-[#9FDC26] opacity-100": category.strCategory === categoryActive,
                })}
              >
                {category.strCategory}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-6 place-items-center grid-col-1 lg:grid-cols-3 md:grid-cols-2 my-12">
        {isMealLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))
        ) : (
          meals?.meals?.map(meal => (
            <RecipeCard item={meal} key={meal.idMeal} />
          ))
        )}
      </div>
    </section>
  );
};
