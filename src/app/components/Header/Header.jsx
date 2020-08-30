import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category';

import './Header.scss';

const Header = ({ isAnswer, score, activeCategory }) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <svg>
            <use xlinkHref="assets/images/sprites/sprite.svg#logo" />
          </svg>
        </div>
        <div className="header__score">
          Score: &nbsp;
          <span className="score">{score}</span>
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
  score: PropTypes.number,
};

export default Header;
