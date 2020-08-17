import React from 'react';
import PropTypes from 'prop-types';

import './VariantList';

const VariantList = ({ isAnswer, data }) => {
  console.log(data);
  const vListItems = data.map((dataItem) => (
    <li className="v-list_item" key={dataItem.id}>
      <span className="v-list__check"></span>
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
