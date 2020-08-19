import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import Icon from '../Icon/Icon';

import './Question.scss';

const Question = ({ isAnswer, randomQuestion }) => {
  return (
    <div className="question">
      <div className="question__row">
        <div className="question__row-col">
          <div className="question__img">
            <img
              src="assets/images/unvisible.jpg"
              alt="unvisible"
              className="question__img-file"
            />
          </div>
        </div>
        <div className="question__row-col">
          <div className="question__content">
            <div className="question__title">******</div>
            <div className="question__audio-player">
              <AudioPlayer
                src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
                showJumpControls={false}
                customAdditionalControls={[]}
                customIcons={{
                  play: <Icon iconId="play2" />,
                  pause: <Icon iconId="pause" />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  isAnswer: PropTypes.bool,
  randomQuestion: PropTypes.object,
};

export default Question;
