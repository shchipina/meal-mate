// import { useRandomRecipe } from "./hooks/useRecipes";

import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export const App = () => {
  // const {data, isLoading, isError} = useRandomRecipe();


  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <Header />
        {/* <Home /> */}
        <Outlet />
      </div>
    </>
  );
};
