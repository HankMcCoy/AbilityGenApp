'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var IntegerInput = require('./integerInput');
var getPointsLeft = require('../lib/getPointsLeft');

var AbilityGenApp = React.createClass({
  getInitialState: function () {
    return {
      baseScores: {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
      }
    };
  },
  render: function() {
    var scoreInputs = Object.keys(this.state.baseScores)
      .map(this.renderScore);

    return (
      <View style={styles.appContainer}>
        <Text style={styles.heading}>
          13th Age Abilities
        </Text>
        <View style={styles.scoresContainer}>
          <Text>Scores</Text>
          {scoreInputs}
        </View>
        <View>
          <Text>
            Points left: {getPointsLeft(this.state.baseScores)}
          </Text>
        </View>
      </View>
    );
  },
  renderScore: function (ability) {
    var score = this.state.baseScores[ability];
    var modifier = Math.floor(0.5*(score - 8));
    return (
      <View style={styles.scoreContainer}>
        <Text style={styles.abilityText}>{ability.toUpperCase()}</Text>
        <IntegerInput
          value={this.state.baseScores[ability]}
          min={8}
          max={18}
          onChange={(score) => this.updateBaseScore(ability, score)} />
        <Text style={styles.modText}>+{modifier}</Text>
      </View>
    );
  },
  updateBaseScore: function (ability, score) {
    this.setState((prevState) => {
      var updatedBaseScores;
      var scoreUpdate = {};

      scoreUpdate[ability] = score;
      updatedBaseScores = Object.assign({}, prevState.baseScores, scoreUpdate);

      return {
        baseScores: getPointsLeft(updatedBaseScores) < 0
          ? prevState.baseScores
          : updatedBaseScores
      };
    });
  }
});

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    marginTop: 15,
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  abilityText: {
    textAlign: 'center',
    padding: 10,
    width: 55,
  },
  modText: {
    textAlign: 'center',
    padding: 10,
  }
});

module.exports = AbilityGenApp;
