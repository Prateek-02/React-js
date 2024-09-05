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
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">{props.type}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;