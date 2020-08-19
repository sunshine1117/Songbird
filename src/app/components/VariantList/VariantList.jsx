import React from 'react';
import PropTypes from 'prop-types';

import './VariantList.scss';

const VariantList = ({ isAnswer, data }) => {
  console.log(isAnswer);
  console.log(data);
  const vListItems = data.map((dataItem) => (
    <li className="v-list__item" key={dataItem.id}>
      <span
        className={
          isAnswer ? 'v-list__check is-correct' : 'v-list__check is-wrong'
        }
      ></span>
      {dataItem.name}
    </li>
  ));
  return <ul className="v-list">{vListItems}</ul>;
};

VariantList.propTypes = {
  isAnswer: PropTypes.bool,
  quesVariants: PropTypes.arrayOf(PropTypes.object),
};

export default VariantList;
