import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          BoxMeals
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/howitworks"
          className={
            window.location.pathname === "/howitworks"
              ? "nav-link active"
              : "nav-link"
          }
        >
          How It Works
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/meals"
          className={
            window.location.pathname === "/meals"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Meals
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/plans"
          className={
            window.location.pathname === "/plans"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Plans
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/order"
          className={
            window.location.pathname === "/order"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Order Now
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
