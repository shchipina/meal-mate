import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="py-[30px]">
      <div className="flex justify-between items-center px-4 py-[5px] border rounded-3xl">
        <a href="/">
          <img src={logo} />
        </a>

        <nav>
          <ul className="flex gap-2">
            <li>
              Home
            </li>
            <li>
              Recipes
            </li>
            <li>
              Weekly menu
            </li>
          </ul>
        </nav>

        <div className="flex gap-3">
          <a href="/">Favorites</a>
          <a href="/">User</a>
        </div>
      </div>
    </header>
  );
}