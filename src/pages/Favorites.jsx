import React from 'react'
import { useSelector } from 'react-redux'
import { RecipeCard } from '../components/RecipeCard/RecipeCard';

import noFavorites from "../assets/no-favorites.png";

export const Favorites = () => {
  const recipes = useSelector(state => state.favorites.recipes);

  return (
    <section>
      <h2 className="text-[22px] uppercase text-[#EE6352] font-medium">
        Favorite Recipes
      </h2>

      {
        !recipes.length ? (
          <div className="flex items-center justify-center mt-20">
            <div className="flex flex-col items-center justify-center max-w-[240px]">
              <img
                src={noFavorites}
                alt="no favorites yet"
                className="opacity-65 mb-5"
              />
              <p className="text-[24px] text-[#333] opacity-80">No Favorites Yet</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 place-items-center grid-col-1 lg:grid-cols-3 md:grid-cols-2 my-10">
            {recipes.map(recipe => (
              <RecipeCard item={recipe} key={recipe.idMeal} />
            ))}
          </div>
        )
      }

    </section >
  )
}
