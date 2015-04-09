'use strict';

var scoreCosts = {
  '8': 0,
  '9': 1,
  '10': 2,
  '11': 3,
  '12': 4,
  '13': 5,
  '14': 6,
  '15': 8,
  '16': 10,
  '17': 13,
  '18': 16
};

function getPointsLeft(abilityScores) {
  var cost =  Object.keys(abilityScores).reduce((costs, key) => {
    return costs + scoreCosts[abilityScores[key]];
  }, 0);

  return 28 - cost;
}

module.exports = getPointsLeft;
