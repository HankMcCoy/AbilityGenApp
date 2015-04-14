var React = require('react-native');
var StyleSheet = require('react-native-debug-stylesheet');
var PointBuyer = require('./pointBuyer');
var StyledText = require('./styledText');
var TraitPicker = require('./traitPicker');
var levels = require('../data/levels');
var races = require('../data/races');
var classes = require('../data/classes');
var {
  TouchableHighlight,
  View,
} = React;

var RaceAndClassSelector = React.createClass({
  getInitialState: function () {
    return {
      raceIdx: 0,
      classIdx: 0,
    };
  },
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.horizontalContainer}>
          <TraitPicker
            options={races}
            selectedIdx={this.state.raceIdx}
            selectIdx={(raceIdx) => this.setState({ raceIdx })}
          />
          <TraitPicker
            options={classes}
            selectedIdx={this.state.classIdx}
            selectIdx={(classIdx) => this.setState({ classIdx })}
          />
        </View>
        <TouchableHighlight onPress={this.proceed}>
          <StyledText>Continue</StyledText>
        </TouchableHighlight>
      </View>
    );
  },
  proceed: function () {
    var title = levels[this.props.levelIdx].name + ' ' +
      races[this.state.raceIdx].name + ' ' +
      classes[this.state.classIdx].name;

    this.props.navigator.push({
      component: PointBuyer,
      title: title,
      backButtonTitle: 'Back',
      passProps: {
        levelIdx: this.props.levelIdx,
        raceIdx: this.state.raceIdx,
        classIdx: this.state.classIdx,
      }
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  horizontalContainer: {
    flexDirection: 'row',
  }
});

module.exports = RaceAndClassSelector;
