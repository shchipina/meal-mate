import axios from "axios";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const fetchFromAPI = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);

    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPopularRecipes = async () => {
  const { data } = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
  );
  return data.meals.slice(0, 6);
};

export const getRandomMeal = () => fetchFromAPI('/random.php');

export const getRecipeById = (id) => fetchFromAPI(`/lookup.php?i=${id}`);

export const searchRecipes = (query) => fetchFromAPI(`/search.php?s=${query}`);

export const getCategories = () => fetchFromAPI('/categories.php');

export const getMealsByCategory = (category) => fetchFromAPI(`/filter.php?c=${category}`);

export const getAreas = () => fetchFromAPI('/list.php?a=list');

export const getMealsByArea = (area) => fetchFromAPI(`/filter.php?a=${area}`);