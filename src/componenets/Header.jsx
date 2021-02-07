import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"

export default function Header() {
  return (
    <header className="header-container">
      <div className="inner-content">
        <div className="brand">
          <Link className="text-link" to="/">movix</Link>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link  className="text-link nav-links__watchlist" to="/">Watch list</Link>
        </li>
        <li>
          <Link  className="text-link nav-links__watched" to="/watched">Watched</Link>
        </li>
        <li>
          <Link className="text-link nav-links__add" to="/add">+add</Link>
        </li>
      </ul>
    </header>
  );
}
