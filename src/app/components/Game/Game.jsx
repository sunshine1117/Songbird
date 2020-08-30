import React, { Component } from 'react';
import './Game.scss';

import AudioPlayer from 'react-h5-audio-player';
import Header from '../Header/Header';
import Question from '../Question/Question';
import VariantList from '../VariantList/VariantList';
import Details from '../Details/Details';
import Button from '../Button/Button';
import { getRandomBird } from '../../utils/utils';
import birdsData from '../../data/data';
import categories from '../../data/game-categories';

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
      point: 5,
      score: 0,
      currentLevel: 0,
      isFinished: false,
    };

    this.player = React.createRef();
    this.correctAnswerPlayer = React.createRef();
    this.wrongAnswerPlayer = React.createRef();
  }

  componentDidMount() {
    this.setState((state) => ({
      data: birdsData[state.currentLevel],
      randomQuestion:
        birdsData[state.currentLevel][
          getRandomBird(birdsData[state.currentLevel].length)
        ],
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
      this.player.current.audio.current.pause();
      this.player.current.audio.current.currentTime = 0;
      this.correctAnswerPlayer.current.audio.current.play();
    } else {
      wrongAnswersId.push(id);
      this.wrongAnswerPlayer.current.audio.current.play();
    }

    this.setState(
      (state) => ({
        selectedVariantId: id,
        isVariantSelected: true,
        isAnswer: randomQuestion.id === id,
        wrongAnswersId,
        correctAnswersId,
        point: randomQuestion.id === id ? 5 : state.point - 1,
        score: randomQuestion.id === id ? state.point : state.score,
      }),
      (state) => {
        if (!isAnswer) {
          setTimeout(() => {
            this.wrongAnswerPlayer.current.audio.current.pause();
            this.wrongAnswerPlayer.current.audio.current.currentTime = 0;
          }, 1000);
        } else {
          setTimeout(() => {
            this.correctAnswerPlayer.current.audio.current.currentTime = 0;
          }, 1000);
        }
      }
    );
  };

  handleNextLevel = () => {
    const { currentLevel } = this.state;

    if (currentLevel === 5) {
      this.setState({
        activeCategory: 'warm-up',
        isFinished: true,
      });

      return;
    }

    this.setState((state) => ({
      data: birdsData[state.currentLevel + 1],
      randomQuestion:
        birdsData[state.currentLevel + 1][
          getRandomBird(birdsData[state.currentLevel + 1].length)
        ],
      activeCategory: categories[state.currentLevel + 1].category,
      currentLevel: state.currentLevel + 1,
      isVariantSelected: false,
      selectedVariantId: null,
      isAnswer: false,
      wrongAnswersId: [],
      correctAnswersId: [],
      point: state.score + 5,
    }));
  };

  handleReset = () => {
    this.setState((state) => ({
      data: birdsData[0],
      randomQuestion: birdsData[0][getRandomBird(birdsData[0].length)],
      activeCategory: 'warm-up',
      isVariantSelected: false,
      selectedVariantId: null,
      isAnswer: false,
      wrongAnswersId: [],
      correctAnswersId: [],
      point: 5,
      score: 0,
      currentLevel: 0,
      isFinished: false,
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
      point,
      isFinished,
    } = this.state;

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

          {isFinished ? (
            <div className="game__over">
              <h1 className="game__congrats">Поздравляем!</h1>
              <p>
                Вы прошли викторину и набрали <span>{score}</span> из
                <span> 30</span> возможных баллов.
              </p>

              <hr className="game__over-hr" />

              <button
                className="button button--green button--over"
                onClick={() => this.handleReset()}
              >
                Попробовать еще раз!
              </button>
            </div>
          ) : (
            <div>
              <div className="game__body">
                <div className="game__guestion">
                  <Question
                    randomQuestion={randomQuestion}
                    isAnswer={isAnswer}
                    ref={this.player}
                  />
                </div>

                <div className="game__body-row">
                  <div className="game__body-row-col">
                    <VariantList
                      data={data}
                      onVariantSelect={this.handleSelectVariant}
                      isAnswer={isAnswer}
                      selectedVariantId={selectedVariantId}
                      wrongAnswersId={wrongAnswersId}
                      correctAnswersId={correctAnswersId}
                    />
                  </div>
                  <div className="game__body-row-col">
                    <Details
                      data={data.filter(
                        (dataItem) => dataItem.id === selectedVariantId
                      )}
                      isVariantSelected={isVariantSelected}
                    />
                  </div>
                </div>
              </div>
              <div className="game__bottom">
                <Button
                  btnText="Next Level"
                  isAnswer={isAnswer}
                  onNextLevel={this.handleNextLevel}
                />
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
          )}
        </div>
      </div>
    );
  }
}

export default Game;
