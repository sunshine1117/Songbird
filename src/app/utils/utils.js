function getRandomBird(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function countScore(rightAnswers, wrongAnswers) {
  const score = 5;

  if (score < 0) return 0;

  if (wrongAnswers.length === 0) {
    return score;
  }
  return score - 1;
}

export { getRandomBird, countScore };
