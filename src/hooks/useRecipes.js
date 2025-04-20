import { useQuery } from "@tanstack/react-query";
import { getPopularRecipes, getRandomMeal } from "../services/api";

export const useRandomRecipe = () => {
  return useQuery({
    queryKey: ["random"],
    queryFn: getRandomMeal
  });
}

export const usePopularRecipes = () => { 
  return useQuery({
    queryKey: ["popular"],
    queryFn: getPopularRecipes,
  })
}