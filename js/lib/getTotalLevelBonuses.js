var levels = require('../data/levels');

function getTotalLevelBonuses(levelIdx) {
  return levels.slice(0, levelIdx + 1).reduce(
    (sum, level) => sum + level.abilityPlusses.reduce(
      (sum2, plus) => sum2 + plus,
      0
    ),
    0
  )
}

module.exports = getTotalLevelBonuses;
