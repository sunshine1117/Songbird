import React from 'react';
import PropTypes from 'prop-types';

import './VariantList.scss';

const VariantList = ({
  data,
  onVariantSelect,
  wrongAnswersId,
  correctAnswersId,
}) => {
  const vListItems = data.map((dataItem) => {
    const isWrong = wrongAnswersId.some((id) => id === dataItem.id)
      ? 'is-wrong'
      : '';
    const isRight = correctAnswersId.some((id) => id === dataItem.id)
      ? 'is-correct'
      : '';

    return (
      <li
        className="v-list__item"
        key={dataItem.id}
        onClick={() => {
          onVariantSelect(dataItem.id);
        }}
      >
        <span className={`v-list__check ${isWrong} ${isRight}`}></span>
        <span>{dataItem.name}</span>
      </li>
    );
  });
  return <ul className="v-list">{vListItems}</ul>;
};

VariantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onVariantSelect: PropTypes.func,
  wrongAnswersId: PropTypes.array,
  correctAnswersId: PropTypes.array,
};

export default VariantList;
