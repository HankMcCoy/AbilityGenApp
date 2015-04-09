'use strict';

var React = require('react-native');
var getPointsLeft = require('../lib/getPointsLeft');
var {
  AppRegistry,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
} = React;
var AbilityRow = require('./abilityRow');

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
  componentDidMount: function () {
    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
  },
  render: function() {
    var abilityRows = Object.keys(this.state.baseScores)
      .map((key) => {
        return (
          <AbilityRow
            ability={key}
            score={this.state.baseScores[key]}
            updateBaseScore={this.updateBaseScore} />
        );
      });

    return (
      <View style={styles.appContainer}>
        <View style={styles.statusBarUnderlay} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            13th Age Abilities
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
          <View>
            {abilityRows}
          </View>
          <Text style={[styles.pointsLeftText, { fontSize: 32 }]}>
            {getPointsLeft(this.state.baseScores)}
          </Text>
          <Text style={styles.pointsLeftText}>
            points left
          </Text>
        </ScrollView>
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
    backgroundColor: '#fdf9f2',
  },
  statusBarUnderlay: {
    backgroundColor: '#440404',
    height: 20,
  },
  contentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  headingContainer: {
    padding: 10,
    backgroundColor: '#440404',
  },
  heading: {
    fontFamily: 'Futura',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    color: '#fff',
  },
  pointsLeftText: {
    fontFamily: 'Futura',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
});

module.exports = AbilityGenApp;
