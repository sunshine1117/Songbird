import React from 'react';
import PropTypes from 'prop-types';
import dataCategory from '../../data/game-categories';

import './Category.scss';

const Category = ({ activeCategory }) => {
  const categoryItems = dataCategory.map((category) => (
    <li
      className={
        category.category === activeCategory
          ? 'category__item active'
          : 'category__item'
      }
      key={category.id}
      data-category={category.category}
    >
      <a href="#" className="category__link">
        {category.name}
      </a>
    </li>
  ));
  return <ul className="category">{categoryItems}</ul>;
};

Category.propTypes = {
  activeCategory: PropTypes.string,
};

export default Category;
