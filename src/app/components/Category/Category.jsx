import React from 'react';
import PropTypes from 'prop-types';
import dataCategory from '../../data/game-categories';

import './Category';

const Category = ({ activeCategory }) => {
  const categoryItems = dataCategory.map((category) => (
    <li
      className="category__item"
      key={category.id}
      data-category={category.category}
    >
      {category.name}
    </li>
  ));
  return <ul className="category">{categoryItems}</ul>;
};

Category.propTypes = {
  activeCategory: PropTypes.string,
};

export default Category;
