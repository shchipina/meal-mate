import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";

export const BurgerMenu = ({ onClose }) => {
  const setActiveStyle = ({ isActive }) =>
    isActive ? "pb-0.5 border-b-3 rounded border-[#EE6352]" : "";

  return (
    <div className="fixed top-0 left-0 w-full h-[50%] bg-white z-50 flex flex-col items-center justify-center gap-6 text-lg font-semibold text-[#444] sm:hidden">
      <button onClick={onClose} className="absolute top-5 right-5">
        <HiX size={30}/>
      </button>
      <NavLink
        to="/"
        onClick={onClose}
        className={({ isActive }) =>
          `hover:text-[#EE6352] ${setActiveStyle({ isActive })}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        onClick={onClose}
        className={({ isActive }) =>
          `hover:text-[#EE6352] ${setActiveStyle({ isActive })}`
        }
      >
        Recipes
      </NavLink>
      <NavLink
        to="/weekly-menu"
        onClick={onClose}
        className={({ isActive }) =>
          `hover:text-[#EE6352] ${setActiveStyle({ isActive })}`
        }
      >
        Weekly menu
      </NavLink>
    </div>
  );
};
