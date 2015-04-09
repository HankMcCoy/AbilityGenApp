'use strict';

var React = require('react-native');
var getDebugStyle = require('../lib/getDebugStyle');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var IntegerInput = React.createClass({
  getDefaultProps: function() {
    return {
      value: 0,
      min: 0,
      max: Math.pow(2, 53) - 1,
      delta: 1
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={getDebugStyle(styles.valueTxt)}>
          {this.props.value}
        </Text>
        <View style={getDebugStyle(styles.btnContainer)}>
          <TouchableHighlight
            underlayColor="#aaa"
            onPress={this.handleIncrement}
            style={[styles.button, styles.incrementButton]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#aaa"
            onPress={this.handleDecrement}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },
  handleIncrement: function () {
    this.changeValue(this.props.delta);
  },
  handleDecrement: function () {
    this.changeValue(-this.props.delta);
  },
  changeValue: function (delta) {
    var nextVal = this.props.value + delta;

    if (nextVal >= this.props.min && nextVal <= this.props.max)
      this.props.onChange(nextVal);
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'stretch',
    height: 60,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  valueTxt: {
    flex: 2,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: 50,
    fontSize: 16,
  },
  incrementButton: {
    borderColor: '#aaa',
    borderBottomWidth: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
  buttonText: {
    fontSize: 20,
  },
});

module.exports = IntegerInput;
