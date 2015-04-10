var React = require('react-native');
var {
  StyleSheet,
  Text,
} = React;

var StyledText = React.createClass({
  render: function () {
    return (
      <Text style={[styles.defaultStyle].concat(this.props.style)}>
        {this.props.children}
      </Text>
    );
  }
});

var styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Futura',
    fontSize: 18,
  }
});

module.exports = StyledText;
