import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
