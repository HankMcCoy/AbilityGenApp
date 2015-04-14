'use strict';

var React = require('react-native');
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
        <Text style={styles.valueTxt}>
          {this.props.value}
        </Text>
        <View style={styles.btnContainer}>
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
    flex: 1,
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
  },
  valueTxt: {
    flex: 2,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  incrementButton: {
    borderColor: '#aaa',
    borderBottomWidth: 1,
  },
  button: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});

module.exports = IntegerInput;
