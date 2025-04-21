import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
