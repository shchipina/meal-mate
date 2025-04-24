import { getRandomMeal } from "../services/api";
import { useEffect, useState } from "react";
import { DetailsButton } from "../ui/DetailsButton";
import { FavoriteButton } from "../ui/FavoriteButton";

export const WeeklyMenu = () => {
  const [weeklyMenu, setWeeklyMenu] = useState([]);

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


  useEffect(() => {
    const storedMenu = localStorage.getItem("weeklyMenu");

    if (storedMenu) {
      setWeeklyMenu(JSON.parse(storedMenu));
    }
  }, []);

  const generateWeeklyMenu = async () => {
    const promises = Array.from({ length: 7 }, () => getRandomMeal());
    const results = await Promise.all(promises);

    const meals = results.map(result => result.meals[0])

    setWeeklyMenu(meals);
    localStorage.setItem('weeklyMenu', JSON.stringify(meals));
  }

  return (
    <section className="my-10">
      <div className="mb-6 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-[#EE6352]">Your Weekly Menu</h1>
        <p className="text-gray-600 mt-2 text-center">
          Generate a random meal plan for the week. Discover new tastes and save your favorites!
        </p>
        <button
          onClick={generateWeeklyMenu}
          className="bg-[#EE6352] hover:bg-amber-600 active:scale-95 transition-all duration-300 px-6 py-4 rounded-2xl text-white text-2xl font-semibold shadow-md hover:shadow-lg mb-5 flex items-center gap-2 mt-5"
        >
          🍽️ Generate weekly menu
        </button>

        {!weeklyMenu.length && (
          <div className="text-center mt-10 text-gray-600 text-xl">
            😔 You haven't generated a weekly menu yet.
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3">
        {
          weeklyMenu.map((meal, i) => (
            <article
              key={meal.idMeal}
              className="flex bg-amber-50 rounded-2xl p-4 shadow-xl"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="max-w-[150px] rounded-2xl"
              />
              <div className="w-full flex flex-col justify-between ml-3">
                <div>
                  <div className="flex justify-between">
                    <p className="text-[#555]">Day:
                      <span className="font-medium ml-1">{weekDays[i]}</span>
                    </p>

                    <FavoriteButton item={meal} />
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] text-[#EE6352] font-medium mt-3">
                    {meal.strMeal}
                  </h3>
                </div>
                <div className="mb-[5px]">
                  <DetailsButton id={meal.idMeal} />
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
