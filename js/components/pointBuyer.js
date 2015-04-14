'use strict';

var React = require('react-native');
var StyleSheet = require('react-native-debug-stylesheet');
var AbilityTableHeader = require('./abilityTableHeader');
var AbilityRow = require('./abilityRow');
var StyledText = require('./styledText');
var getPointsLeft = require('../lib/getPointsLeft');
var levels = require('../data/levels');
var classes = require('../data/classes');
var races = require('../data/races');
var {
  AppRegistry,
  ScrollView,
  StatusBarIOS,
  View,
} = React;

var PointBuyer = React.createClass({
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
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollingContentContainer}>
          <AbilityTableHeader />
          {abilityRows}
        </ScrollView>
        <View style={styles.pointsLeftContainer}>
          <StyledText style={[styles.pointsLeftText, { fontSize: 32 }]}>
            {getPointsLeft(this.state.baseScores)}
          </StyledText>
          <StyledText style={styles.pointsLeftText}>
            points left
          </StyledText>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fdf9f2',
  },
  scrollingContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingBottom: 80,
  },
  headingContainer: {
    padding: 10,
    backgroundColor: '#440404',
  },
  heading: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#fff',
  },
  pointsLeftContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 120,
    paddingBottom: 10,
  },
  pointsLeftText: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
});

module.exports = PointBuyer;
