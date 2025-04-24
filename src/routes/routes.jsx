import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { App } from "../App.jsx";
import { Home } from "../pages/Home.jsx";
import { Recipes } from "../pages/Recipes.jsx";
import { Favorites } from "../pages/Favorites.jsx";
import { RecipeDetails } from "../pages/RecipeDetails.jsx";
import { WeeklyMenu } from "../pages/WeeklyMenu.jsx";

export const router = (
  <Routes>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="details/:id" element={<RecipeDetails />} />
      <Route path="weekly-menu" element={<WeeklyMenu />} />
    </Routes>
  </Routes>
);
