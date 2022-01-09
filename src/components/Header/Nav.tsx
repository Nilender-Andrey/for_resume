import React from 'react';
import { Link } from 'react-scroll';

interface INav {
  position: string;
  navList: {
    name: string;
    path: string;
  }[];
}

function Nav({ position, navList }: INav) {
  return (
    <nav className={`nav ${position}`}>
      <ul className="nav-list">
        {position === 'nav_vertically' && (
          <li className="nav-list__item">
            <Link
              className="nav-list__arrow"
              to="header"
              offset={-100}
              smooth
              duration={500}
            >
              🠖
            </Link>
          </li>
        )}
        {navList.map((item) => (
          <li className="nav-list__item" key={item.name}>
            <Link
              className="nav-list__link link"
              to={item.path}
              offset={-100}
              smooth
              duration={500}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
