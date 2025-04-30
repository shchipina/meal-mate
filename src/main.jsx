import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { App } from './App.jsx'
import { Home } from "./pages/Home.jsx";
import { Recipes } from "./pages/Recipes.jsx";
import { Favorites } from "./pages/Favorites.jsx";
import { RecipeDetails } from "./pages/RecipeDetails.jsx";
import { WeeklyMenu } from "./pages/WeeklyMenu.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="recipes/details/:id" element={<RecipeDetails />} />
              <Route path="weekly-menu" element={<WeeklyMenu />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
