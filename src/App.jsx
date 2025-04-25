import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Breadcrumbs } from "./ui/Breadcrumbs";
import { Footer } from "./components/Footer";

export const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <div className="flex flex-col min-h-screen max-w-[1200px] mx-auto px-[10px]">
      <Header />
      {pathname !== "/" && <Breadcrumbs />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
