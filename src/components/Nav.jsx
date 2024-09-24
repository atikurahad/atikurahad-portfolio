import React from "react";
import '../styles/nav.css'

function Nav() {
  return (
    <div>
      <nav className="dev-nav">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/">About</a>
        <a className="nav-link" href="/">Portfolio</a>
        <a className="nav-link" href="/">Contact</a>
      </nav>
    </div>
  );
}

export default Nav;
