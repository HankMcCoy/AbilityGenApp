'use strict';

var React = require('react-native');
var StyledText = require('./styledText');
var tableStyles = require('./styles/abilityTableStyles');
var getDebugStyle = require('../lib/getDebugStyle');
var {
  StyleSheet,
  View,
} = React;

var AbilityTableHeader = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={getDebugStyle([tableStyles.abilityCell, styles.header])} />
        <StyledText style={getDebugStyle([tableStyles.scoreCell, styles.header])}>
          SCORE
        </StyledText>
        <StyledText style={getDebugStyle([tableStyles.modCell, styles.header])}>
          MOD
        </StyledText>
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
    textAlign: 'center',
  },
});

module.exports = AbilityTableHeader;
