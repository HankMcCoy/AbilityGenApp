'use strict';

var React = require('react-native');
var LevelSelector = require('./levelSelector');
var StyleSheet = require('react-native-debug-stylesheet');
var {
  NavigatorIOS,
} = React;

var App = React.createClass({
  render: function () {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: LevelSelector,
          title: 'Select level',
          backButtonTitle: 'Back',
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
  }
});

module.exports = App;
