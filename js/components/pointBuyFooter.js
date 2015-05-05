var React = require('react-native');
var StyleSheet = require('../lib/stylesheet');
var BigLabelledNumber = require('./bigLabelledNumber');
var getPointsLeft = require('../lib/getPointsLeft');
var getTotalLevelBonuses = require('../lib/getTotalLevelBonuses');
var levels = require('../data/levels');
var {
  View,
} = React;

var PointBuyFooter = React.createClass({
  render() {
    var {
      pointsLeft,
      raceClassBonusesLeft,
      levelBonusesLeft,
    } = this.getFooterValues();

    return (
      <View style={styles.container}>
        <BigLabelledNumber
          value={raceClassBonusesLeft}
          label="race/class bonuses left"
          />
        <BigLabelledNumber
          value={levelBonusesLeft}
          label="lvl bonus left"
          />
        <BigLabelledNumber
          value={pointsLeft}
          label="points left"
          />
      </View>
    );
  },
  getFooterValues() {
    var totalLevelBonuses = getTotalLevelBonuses(this.props.levelIdx);
    var levelBonusesUsed = Object.keys(this.props.levelBonuses).reduce((sum, ability) => {
      return sum + this.props.levelBonuses[ability];
    }, 0);

    return {
      pointsLeft: getPointsLeft(this.props.baseScores),
      raceClassBonusesLeft: 2 - this.props.raceClassBonusAbilities.length,
      levelBonusesLeft: totalLevelBonuses - levelBonusesUsed,
    };
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    padding: 5,
  }
});

module.exports = PointBuyFooter;
