import React from 'react';
import { Link } from 'react-scroll';

import './Burger_nav.scss';

interface IBurgerNav {
  handleBurgerClick: () => void;
  visible: boolean;
  navList: {
    name: string;
    path: string;
  }[];
}

function BurgerNav({ navList, visible, handleBurgerClick }: IBurgerNav) {
  return (
    <nav className={`burger-nav ${visible ? '' : 'burger-nav_not-visible'}`}>
      <ul className="burger-nav-list">
        {navList.map((item) =>
          item.path === 'code' ? null : (
            <li className="burger-nav-list__item" key={item.name}>
              <Link
                className="burger-nav-list__link"
                to={item.path}
                offset={-100}
                smooth
                duration={500}
                onClick={handleBurgerClick}
              >
                {item.name}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

export default BurgerNav;
