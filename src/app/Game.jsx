import React, { Component } from 'react';
import './Game.scss';

import AudioPlayer from 'react-h5-audio-player';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import VariantList from './components/VariantList/VariantList';
import Details from './components/Details/Details';
import Button from './components/Button/Button';
import { getRandomBird, countScore } from './utils/utils';
import birdsData from './data/data';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      randomQuestion: {},
      activeCategory: 'warm-up',
      isVariantSelected: false,
      selectedVariantId: null,
      isAnswer: false,
      wrongAnswersId: [],
      correctAnswersId: [],
      score: 0,
    };

    this.correctAnswerPlayer = React.createRef();
    this.wrongAnswerPlayer = React.createRef();
  }

  componentDidMount() {
    this.setState((state) => ({
      data: birdsData[0],
      randomQuestion: birdsData[0][getRandomBird(birdsData[0].length)],
    }));
  }

  handleSelectVariant = (id) => {
    const {
      randomQuestion,
      wrongAnswersId,
      correctAnswersId,
      isAnswer,
    } = this.state;

    if (isAnswer) {
      this.setState({
        selectedVariantId: id,
        isVariantSelected: true,
      });

      return;
    }

    if (randomQuestion.id === id) {
      correctAnswersId.push(id);
      this.correctAnswerPlayer.current.audio.current.play();
    } else {
      wrongAnswersId.push(id);
      this.wrongAnswerPlayer.current.audio.current.play();
    }

    console.log(countScore(correctAnswersId, wrongAnswersId));

    this.setState((state) => ({
      selectedVariantId: id,
      isVariantSelected: true,
      isAnswer: randomQuestion.id === id,
      wrongAnswersId,
      correctAnswersId,
      score: countScore(correctAnswersId, wrongAnswersId),
    }));
  };

  render() {
    const {
      data,
      activeCategory,
      selectedVariantId,
      isVariantSelected,
      randomQuestion,
      isAnswer,
      wrongAnswersId,
      correctAnswersId,
      score,
    } = this.state;

    // const randomQuestion = data[getRandomBird(data.length)] || {};

    return (
      <div className="game">
        <div className="game__container">
          <div className="game__header">
            <Header
              isAnswer={isAnswer}
              activeCategory={activeCategory}
              score={score}
            />
          </div>
          <div className="game__guestion">
            <Question randomQuestion={randomQuestion} isAnswer={isAnswer} />
          </div>
          <div className="game__body">
            <div className="game__body-col">
              <VariantList
                data={data}
                onVariantSelect={this.handleSelectVariant}
                isAnswer={isAnswer}
                selectedVariantId={selectedVariantId}
                wrongAnswersId={wrongAnswersId}
                correctAnswersId={correctAnswersId}
              />
            </div>
            <div className="game__body-col">
              <Details
                data={data.filter(
                  (dataItem) => dataItem.id === selectedVariantId
                )}
                isVariantSelected={isVariantSelected}
              />
            </div>
          </div>
          <div className="game__bottom">
            <Button btnText="Next Level" isAnswer={isAnswer} />
          </div>
          <div className="game__audios">
            <AudioPlayer
              src="assets/audio/correctanswer.mp3"
              showJumpControls={false}
              autoPlayAfterSrcChange={false}
              customAdditionalControls={[]}
              ref={this.correctAnswerPlayer}
            />
            <AudioPlayer
              src="assets/audio/wronganswer.mp3"
              showJumpControls={false}
              autoPlayAfterSrcChange={false}
              customAdditionalControls={[]}
              ref={this.wrongAnswerPlayer}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
