'use strict';

var React = require('react-native');
var IntegerInput = require('./integerInput');
var StyledText = require('./styledText');
var tableStyles = require('./styles/abilityTableStyles');
var StyleSheet = require('../lib/stylesheet');
var {
  TouchableHighlight,
  View,
} = React;

var AbilityRow = React.createClass({
  render: function () {
    var {
      ability,
      score,
      raceClassBonus,
      levelBonus,
      updateBaseScore,
      toggleRaceClassBonus,
      updateLevelBonus,
    } = this.props;
    var [minScore, maxScore] = [8, 18].map(x => x + raceClassBonus);
    var totalScore = score + raceClassBonus + levelBonus;
    var modifier = Math.floor(0.5*(totalScore - 10));

    return (
      <View style={styles.row}>
        <TouchableHighlight
          style={tableStyles.abilityCell}
          underlayColor="#ddd"
          onPress={() => toggleRaceClassBonus(ability)}>
          <StyledText style={styles.abilityText}>
            {ability.toUpperCase()}
          </StyledText>
        </TouchableHighlight>
        <View style={[tableStyles.scoreCell, styles.scoreContainer]}>
          <IntegerInput
            value={score + raceClassBonus}
            min={minScore}
            max={maxScore}
            onChange={score => updateBaseScore(ability, score - raceClassBonus)} />
        </View>
        <View style={[tableStyles.levelPlusCell, styles.scoreContainer]}>
          <IntegerInput
            value={levelBonus}
            min={0}
            max={2}
            onChange={bonus => updateLevelBonus(ability, bonus)} />
       </View>
        <StyledText style={[tableStyles.modCell, styles.modText]}>
          {modifier >= 0 ? '+' : ''}{modifier}
        </StyledText>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  abilityText: {
    textAlign: 'center',
  },
  scoreContainer: {
    height: 60,
  },
  modText: {
    textAlign: 'center',
  },
});

module.exports = AbilityRow;
