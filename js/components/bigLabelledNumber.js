var React = require('react-native');
var StyledText = require('./styledText');
var StyleSheet = require('../lib/stylesheet');
var {
  View,
} = React;

var BigLabelledNumber = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <StyledText style={styles.value}>
          {this.props.value}
        </StyledText>
        <StyledText style={styles.label}>
          {this.props.label}
        </StyledText>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
});

module.exports = BigLabelledNumber;
