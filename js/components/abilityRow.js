'use strict';

var React = require('react-native');
var IntegerInput = require('./integerInput');
var {
  StyleSheet,
  Text,
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
        <Text style={styles.abilityText}>{ability.toUpperCase()}</Text>
        <IntegerInput
          value={score}
          min={8}
          max={18}
          onChange={(score) => updateBaseScore(ability, score)} />
        <Text style={styles.modText}>
          {modifier >= 0 ? '+' : ''}{modifier}
        </Text>
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
    width: 55,
  },
  modText: {
    textAlign: 'center',
    paddingLeft: 20,
    width: 40,
  },
});

module.exports = AbilityRow;
