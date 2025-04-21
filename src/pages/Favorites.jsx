import React from 'react'
import { useSelector } from 'react-redux'
import { RecipeCard } from '../components/RecipeCard/RecipeCard';

export const Favorites = () => {
  const recipes = useSelector(state => state.favorites.recipes);
  console.log(recipes)

  return (
    <section>
      <h2>Favorite Recipes</h2>

      <div className="grid gap-6 place-items-center grid-col-1 lg:grid-cols-3 md:grid-cols-2">
        {recipes.map(recipe => (
          <RecipeCard item={recipe} key={recipe.idMeal} />
        ))}
      </div>

    </section>
  )
}
