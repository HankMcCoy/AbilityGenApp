'use strict';

var React = require('react-native');
var tableStyles = require('./styles/abilityTableStyles');
var getDebugStyle = require('../lib/getDebugStyle');
var {
  StyleSheet,
  Text,
  View,
} = React;

var AbilityTableHeader = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={getDebugStyle([tableStyles.abilityCell, styles.header])} />
        <Text style={getDebugStyle([tableStyles.scoreCell, styles.header])}>
          SCORE
        </Text>
        <Text style={getDebugStyle([tableStyles.modCell, styles.header])}>
          MOD
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  header: {
    fontWeight: '800',
    fontFamily: 'Futura',
    textAlign: 'center',
  },
});

module.exports = AbilityTableHeader;
