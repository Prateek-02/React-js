import React from "react";

function Navigation(props)
{
  return(
    <nav>
        <ul className="nav-links">
        <li>
          <a href="/">{props.title}</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">{props.title}</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;