function getRandomBird(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function countScore(bool) {
  let score = 5;

  if (!bool) {
    score -= 1;
  } else {
    return score;
  }

  return score;
}

export { getRandomBird, countScore };
