import React, { useEffect, useState } from 'react';

import Nav from './Nav';
import navList from './nav_list';
import './Header.scss';
import BurgerNav from './Burger_nav/Burger_nav';
import Burger from './Burger/Burger';

function Header() {
  const [position, setPosition] = useState('nav_horizontally');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 30) {
        setPosition(`nav_vertically`);
      } else {
        setPosition('nav_horizontally');
      }
    };
  }, []);

  const handleBurgerClick = () => {
    setVisible(!visible);
  };

  return (
    <header className="header" id="header">
      <Nav position={position} navList={navList} />
      <BurgerNav
        navList={navList}
        visible={visible}
        handleBurgerClick={handleBurgerClick}
      />
      <Burger handleBurgerClick={handleBurgerClick} visible={visible} />
    </header>
  );
}

export default Header;
