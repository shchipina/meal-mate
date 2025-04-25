import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const setActiveStyle = ({ isActive }) => {
    return isActive ? "pb-0.5 border-b-3 rounded border-[#EE6352]" : '';
  };

  return (
    <nav className="hidden sm:flex">
      <ul className="flex gap-2 font-medium text-[#444]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `hover:text-[#EE6352] ${setActiveStyle({ isActive })}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipes"
            className={({ isActive }) => `hover:text-[#EE6352] ${setActiveStyle({ isActive })}`}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weekly-menu"
            className={({ isActive }) => `hover:text-[#EE6352] ${setActiveStyle({ isActive })}`}
          >
            Weekly menu
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
