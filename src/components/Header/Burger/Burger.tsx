import React from 'react';

import './Burger.scss';

interface IBurger {
  handleBurgerClick: () => void;
  visible: boolean;
}

function Burger({ handleBurgerClick, visible }: IBurger) {
  return (
    <div
      className={`burger ${visible ? 'active' : ' '}  `}
      role="button"
      tabIndex={0}
      onClick={handleBurgerClick}
      onKeyDown={handleBurgerClick}
    >
      <span />
    </div>
  );
}

export default Burger;
