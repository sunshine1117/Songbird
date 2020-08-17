import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

const Details = ({ data, isVariantSelected }) => {
  console.log(data);
  return (
    <div className="d-card">
      {isVariantSelected ? (
        <div className="d-card__inner">
          <div className="d-card__head">
            <div className="d-card__image">
              <img src={data[0].image} alt="detail img" />
            </div>
            <div className="d-card__group">
              <div className="d-card__title">{data[0].name}</div>
              <div className="d-card__subtitle">{data[0].species}</div>
              <div className="d-card__player">
                <AudioPlayer
                  src={data[0].audio}
                  showJumpControls={false}
                  customAdditionalControls={[]}
                />
              </div>
            </div>
          </div>

          <p className="d-card__desc">{data.description}</p>
        </div>
      ) : (
        <p>Please choose variant</p>
      )}
    </div>
  );
};

export default Details;
