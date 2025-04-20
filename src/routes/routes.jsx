import { createBrowserRouter } from "react-router-dom";

import { App } from "../App.jsx";
import { Home } from "../pages/Home.jsx";
import { Favorites } from "../pages/Favorites.jsx";
import { RecipeDetails } from "../pages/RecipeDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "favorites", element: <Favorites /> },
      { path: "recipe/:id", element: <RecipeDetails /> },
    ],
  },
]);
