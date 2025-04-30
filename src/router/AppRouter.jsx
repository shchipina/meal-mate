import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Recipes } from "../pages/Recipes";
import { Favorites } from "../pages/Favorites";
import { RecipeDetails } from "../pages/RecipeDetails";
import { WeeklyMenu } from "../pages/WeeklyMenu";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/details/:id" element={<RecipeDetails />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="weekly-menu" element={<WeeklyMenu />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
