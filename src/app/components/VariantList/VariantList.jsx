import React from 'react';
import PropTypes from 'prop-types';

import './VariantList.scss';

const VariantList = ({
  data,
  isVariantSelected,
  isAnswer,
  onVariantSelect,
  wrongAnswersId,
  correctAnswersId,
}) => {
  const vListItems = data.map((dataItem) => {
    console.log(correctAnswersId, wrongAnswersId);
    const isWrong = wrongAnswersId.some((id) => id === dataItem.id)
      ? 'is-wrong'
      : '';
    const isRight = correctAnswersId.some((id) => id === dataItem.id)
      ? 'is-correct'
      : '';

    console.log(isWrong, isRight);
    return (
      <li
        className="v-list__item"
        key={dataItem.id}
        onClick={() => {
          onVariantSelect(dataItem.id);
        }}
      >
        <span className={`v-list__check ${isWrong} ${isRight}`}></span>
        {dataItem.name}
      </li>
    );
  });
  return <ul className="v-list">{vListItems}</ul>;
};

VariantList.propTypes = {
  isVariantSelected: PropTypes.bool,
  isAnswer: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  onVariantSelect: PropTypes.func,
  wrongAnswersId: PropTypes.array,
  correctAnswersId: PropTypes.array,
};

export default VariantList;
