import { useQuery } from "@tanstack/react-query";
import { getCategories, getPopularRecipes } from "../services/api";

export const usePopularRecipes = () => { 
  return useQuery({
    queryKey: ["popular"],
    queryFn: getPopularRecipes,
  });
}

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
}