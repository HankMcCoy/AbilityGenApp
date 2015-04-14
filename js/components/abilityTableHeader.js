'use strict';

var React = require('react-native');
var StyledText = require('./styledText');
var tableStyles = require('./styles/abilityTableStyles');
var {
  StyleSheet,
  View,
} = React;

var AbilityTableHeader = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={[tableStyles.abilityCell, styles.header]} />
        <StyledText style={[tableStyles.scoreCell, styles.header]}>
          SCORE
        </StyledText>
        <StyledText style={[tableStyles.modCell, styles.header]}>
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
