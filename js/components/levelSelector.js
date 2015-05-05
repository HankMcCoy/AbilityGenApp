var React = require('react-native');
var StyleSheet = require('../lib/stylesheet');
var RaceAndClassSelector = require('./raceAndClassSelector');
var TraitPicker = require('./traitPicker');
var StyledText = require('./styledText');
var levels = require('../data/levels');
var {
  TouchableHighlight,
  View,
} = React;

var LevelSelector = React.createClass({
  getInitialState: function () {
    return {
      levelIdx: 0,
    };
  },
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <TraitPicker
            options={levels}
            selectedIdx={this.state.levelIdx}
            selectIdx={(levelIdx) => this.setState({ levelIdx })}
          />
        </View>
        <TouchableHighlight
          underlayColor="#ddd"
          style={styles.continueButton}
          onPress={this.proceed}>
          <StyledText>Continue</StyledText>
        </TouchableHighlight>
      </View>
    );
  },
  proceed: function () {
    this.props.navigator.push({
      component: RaceAndClassSelector,
      title: 'Select race and class',
      backButtonTitle: 'Back',
      passProps: {
        levelIdx: this.state.levelIdx,
      },
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  continueButton: {
    height: 40,
    borderTopColor: '#ccc',
    borderTopWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = LevelSelector;
