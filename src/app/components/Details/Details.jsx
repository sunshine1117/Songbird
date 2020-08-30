import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import Icon from '../Icon/Icon';

import './Details.scss';

const Details = ({ data, isVariantSelected }) => {
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
                  autoPlayAfterSrcChange={false}
                  customAdditionalControls={[]}
                  customIcons={{
                    play: <Icon iconId="play2" />,
                    pause: <Icon iconId="pause" />,
                  }}
                />
              </div>
            </div>
          </div>

          <p className="d-card__desc">{data[0].description}</p>
        </div>
      ) : (
        <p>
          Послушайте плеер.
          <br />
          Выберите птицу из списка
        </p>
      )}
    </div>
  );
};

Details.propTypes = {};

export default Details;
