import { HashRouter as Router, Route, Routes  } from "react-router-dom";

import { App } from "../App.jsx";
import { Home } from "../pages/Home.jsx";
import { Recipes } from "../pages/Recipes.jsx";
import { Favorites } from "../pages/Favorites.jsx";
import { RecipeDetails } from "../pages/RecipeDetails.jsx";
import { WeeklyMenu } from "../pages/WeeklyMenu.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "favorites", element: <Favorites /> },
      { path: "details/:id", element: <RecipeDetails /> },
      { path: "weekly-menu", element: <WeeklyMenu /> },
    ],
  },
]);
