import { FavoriteButton } from "../../ui/FavoriteButton";
import { DetailsButton } from "../../ui/DetailsButton";

export const RecipeCard = ({ item }) => {
  return (
    <article className="w-full rounded-3xl overflow-hidden bg-amber-50">
      <img
        src={item.strMealThumb}
        alt={item.strMeal}
        className="h-[234px] w-full object-cover"
      />

      <div className="p-6">
        <p
          className="text-[18px] font-medium py-3"
          title={item.strMeal}
        >
          {
            item?.strMeal?.length > 35
              ? `${item.strMeal.slice(0, 35)}...`
              : item?.strMeal
          }
        </p>

        <div className="flex justify-between">
          <DetailsButton id={item.idMeal} />

          <FavoriteButton item={item} />
        </div>
      </div>
    </article>
  );
}