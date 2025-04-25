import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar } from "./Navbar";
import { MdFavoriteBorder } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const recipes = useSelector(state => state.favorites.recipes);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="py-[30px]">
      <div className="flex justify-between items-center px-4 py-[5px] border rounded-3xl">
        <Link to="/">
          <img src={logo} alt="Meat Mate" />
        </Link>

        <Navbar />

        <div className="flex gap-2">
          <button className="sm:hidden" onClick={toggleMenu}>
            {!isOpen && <HiMenuAlt3 size={30} opacity={0.7} />}
          </button>

          <Link to="/favorites" className="relative">
            <MdFavoriteBorder size={30} opacity={0.7} />
            <span className="absolute right-[-7px] top-[-7px] bg-[#EE6352] w-[18px] h-[18px] text-center leading-[18px] text-[12px] rounded-full text-white font-medium">
              {recipes.length > 9 ? "9+" : recipes.length}
            </span>
          </Link>
        </div>
      </div>

      {isOpen && <BurgerMenu onClose={toggleMenu} />}
    </header>
  );
}