import React from 'react';

const Icon = ({ iconId }) => {
  return (
    <svg>
      <use href={`assets/images/sprites/sprite.svg#${iconId}`}></use>
    </svg>
  );
};

export default Icon;
