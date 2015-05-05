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
      isValidRaceClass,
    } = this.props;
    var totalScore = score + raceClassBonus + levelBonus;
    var modifier = Math.floor(0.5*(totalScore - 10));
    var isAbilitySelected = raceClassBonus > 0;

    return (
      <View style={styles.row}>
        <TouchableHighlight
          style={[tableStyles.abilityCell, styles.abilityContainer]}
          underlayColor="#ddd"
          onPress={() => toggleRaceClassBonus(ability)}
          >
          <View>
            {isAbilitySelected ? <SelectedAbilityDecoration /> : undefined}
            <StyledText
              style={[
                styles.abilityText,
                isAbilitySelected || isValidRaceClass
                  ? { color: '#000' }
                  : null
              ]}
              >
              {ability.toUpperCase()}
            </StyledText>
          </View>
        </TouchableHighlight>
        <View style={[tableStyles.scoreCell, styles.scoreContainer]}>
          <IntegerInput
            value={score + raceClassBonus + levelBonus}
            onChange={score => updateBaseScore(ability, score - raceClassBonus - levelBonus)}
          />
        </View>
        <View style={[tableStyles.levelPlusCell, styles.scoreContainer]}>
          <IntegerInput
            value={levelBonus}
            onChange={bonus => updateLevelBonus(ability, bonus)}
          />
        </View>
        <StyledText style={[tableStyles.modCell, styles.modText]}>
          {modifier >= 0 ? '+' : ''}{modifier}
        </StyledText>
      </View>
    );
  }
});

var SelectedAbilityDecoration = React.createClass({
  render() {
    return (
      <View style={styles.selectedAbilityDecoration} />
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
  abilityContainer: {
    position: 'relative',
  },
  abilityText: {
    textAlign: 'center',
    color: '#777',
  },
  scoreContainer: {
    height: 60,
  },
  modText: {
    textAlign: 'center',
  },
  activeRaceClass: {
    color: '#000',
  },
  validRaceClass: {
    color: '#000',
  },
  selectedAbilityDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 3,
    backgroundColor: '#000',
  }
});

module.exports = AbilityRow;
