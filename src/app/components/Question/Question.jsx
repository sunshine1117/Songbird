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
              src={
                isAnswer ? randomQuestion.image : 'assets/images/unvisible.jpg'
              }
              alt="unvisible"
              className="question__img-file"
            />
          </div>
        </div>
        <div className="question__row-col">
          <div className="question__content">
            <div className="question__title">
              {isAnswer ? randomQuestion.name : '******'}
            </div>
            <div className="question__audio-player">
              <AudioPlayer
                src={randomQuestion.audio}
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
      </div>
    </div>
  );
};

Question.propTypes = {
  isAnswer: PropTypes.bool,
  randomQuestion: PropTypes.object,
};

export default Question;
