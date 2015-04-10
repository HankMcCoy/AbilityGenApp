'use strict';

var React = require('react-native');
var IntegerInput = require('./integerInput');
var StyledText = require('./styledText');
var tableStyles = require('./styles/abilityTableStyles');
var getDebugStyle = require('../lib/getDebugStyle');
var {
  StyleSheet,
  View,
} = React;

var AbilityRow = React.createClass({
  render: function () {
    var ability = this.props.ability;
    var score = this.props.score;
    var updateBaseScore = this.props.updateBaseScore;
    var modifier = Math.floor(0.5*(score - 10));

    return (
      <View style={styles.row}>
        <StyledText style={getDebugStyle([tableStyles.abilityCell, styles.abilityText])}>
          {ability.toUpperCase()}
        </StyledText>
        <View style={getDebugStyle([tableStyles.scoreCell, styles.scoreContainer])}>
          <IntegerInput
            value={score}
            min={8}
            max={18}
            onChange={(score) => updateBaseScore(ability, score)} />
        </View>
        <StyledText style={getDebugStyle([tableStyles.modCell, styles.modText])}>
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
