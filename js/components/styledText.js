var React = require('react-native');
var {
  StyleSheet,
  Text,
} = React;

/**
 * Use this component instead of Text to apply default text styling.
 */
var StyledText = React.createClass({
  render: function () {
    return (
      <Text ref="node" style={[styles.defaultStyle].concat(this.props.style)}>
        {this.props.children}
      </Text>
    );
  },
  /**
   * Forward calls to setNativeProps on to the text node.
   *
   * This is necessary for this StyledText to be used as a direct child
   * of Touchables (and possibly other React Native components).
   */
  setNativeProps: function () {
    this.refs.node.setNativeProps.apply(null, [].slice.call(arguments, 0));
  }
});

var styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Futura',
    fontSize: 18,
  }
});

module.exports = StyledText;
