var levels = require('../data/levels');

function getMaxLevelBonus(levelIdx) {
  return levels.slice(0, levelIdx + 1).reduce(
    (sum, level) => sum + (level.abilityPlusses.length ? 1 : 0),
    0
  );
}

module.exports = getMaxLevelBonus;
