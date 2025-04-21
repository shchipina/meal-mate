import { Link } from "react-router-dom";
import { FavoriteButton } from "../../ui/FavoriteButton";

export const RecipeCard = ({ item }) => {
  return (
    <article className="w-[350px] sm:w-full rounded-3xl overflow-hidden bg-amber-50">
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
            item.strMeal.length > 28
              ? `${item.strMeal.slice(0, 28)}...`
              : item.strMeal
          }
        </p>

        <div className="flex justify-between">
          <Link
            to={`/details/${item.idMeal}`}
            className="border border-b-[#333] rounded-3xl px-[24px] py-[6px] uppercase hover:bg-[#9FDC26]"
          >
            View recipe
          </Link>

          <FavoriteButton item={item} />
        </div>
      </div>
    </article>
  );
}