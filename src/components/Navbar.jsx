import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const setActiveStyle = ({ isActive }) => {
    return isActive ? "pb-0.5 border-b-3 rounded border-[#EE6352]" : ''
  };

  return (
    <nav>
      <ul className="flex gap-2 font-medium">
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
  )
}

