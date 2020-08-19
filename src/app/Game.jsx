import React, { Component } from 'react';
import './Game.scss';

import Header from './components/Header/Header';
import Question from './components/Question/Question';

import birdsData from './data/data';
import VariantList from './components/VariantList/VariantList';
import Details from './components/Description/Description';
import Button from './components/Button/Button';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isAnswer: true,
      activeCategory: 'warm-up',
      randomQuestion: {},
      isVariantSelected: false,
      selectedVariantId: 1 || null,
    };
  }

  componentDidMount() {
    this.setState((state) => ({
      data: birdsData[0],
      isVariantSelected: true,
    }));
  }

  render() {
    const {
      data,
      isAnswer,
      activeCategory,
      selectedVariantId,
      isVariantSelected,
    } = this.state;

    console.log(data.filter((dataItem) => dataItem.id === selectedVariantId));

    return (
      <div className="game">
        <div className="game__container">
          <div className="game__header">
            <Header isAnswer={isAnswer} activeCategory={activeCategory} />
          </div>
          <div className="game__guestion">
            <Question />
          </div>
          <div className="game__body">
            <div className="game__body-col">
              <VariantList data={data} isAnswer={isAnswer} />
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
        </div>
      </div>
    );
  }
}

export default Game;
