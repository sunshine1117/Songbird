import React from 'react';
import PropTypes from 'prop-types';

import './Button';

const Button = ({ isAnswer, btnText }) => {
  return <button className="button button--green">{btnText}</button>;
};

Button.propTypes = {
  isAnswer: PropTypes.bool,
  btnText: PropTypes.string,
};

export default Button;
