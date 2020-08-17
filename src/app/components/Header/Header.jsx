import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category';

import './Header';

const Header = ({ isAnswer, activeCategory }) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <svg>
            <use xlinkHref="assets/images/sprites/sprite.svg#logo" />
          </svg>
        </div>
        <div className="header__score">
          <span className="score">{0}</span>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__category">
          <Category activeCategory={activeCategory} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAnswer: PropTypes.bool,
  activeCategory: PropTypes.string,
};

export default Header;
