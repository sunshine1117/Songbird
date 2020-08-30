import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ isAnswer, btnText, onNextLevel }) => {
  return (
    <button
      className={`button ${isAnswer ? 'button--green' : 'button--dark'}`}
      onClick={() => {
        onNextLevel();
      }}
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  onNextLevel: PropTypes.func,
  isAnswer: PropTypes.bool,
  btnText: PropTypes.string,
};

export default Button;
