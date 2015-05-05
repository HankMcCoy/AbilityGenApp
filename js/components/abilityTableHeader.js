'use strict';

var React = require('react-native');
var StyledText = require('./styledText');
var tableStyles = require('./styles/abilityTableStyles');
var StyleSheet = require('../lib/stylesheet');
var {
  View,
} = React;

var AbilityTableHeader = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={tableStyles.abilityCell} />
        <StyledText style={[tableStyles.scoreCell, styles.header]}>
          SCORE
        </StyledText>
        <StyledText style={[tableStyles.levelPlusCell, styles.header]}>
          LVL BONUS
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
    fontSize: 14,
    textAlign: 'center',
  },
});

module.exports = AbilityTableHeader;
