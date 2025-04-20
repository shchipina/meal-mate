import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export const Header = () => {
  const setActiveStyle = ({ isActive }) => {
    return isActive ? "pb-0.5 border-b-3 rounded border-[#EE6352]" : ''
  };

  return (
    <header className="py-[30px]">
      <div className="flex justify-between items-center px-4 py-[5px] border rounded-3xl">
        <Link to="/">
          <img src={logo} alt="Meat Mate" />
        </Link>

        <nav>
          <ul className="flex gap-2">
            <li>
              <NavLink
                to="/"
                className={setActiveStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className={setActiveStyle}
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weekly-menu"
                className={setActiveStyle}
              >
                Weekly menu
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3">
          <Link to="/favorites">Favorites</Link>
          <Link to="/">User</Link>
        </div>
      </div>
    </header>
  );
}