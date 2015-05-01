var React = require('react-native');
var StyleSheet = require('../lib/stylesheet');
var {
  PickerIOS,
  View,
} = React;

var TraitPicker = React.createClass({
  render: function () {
    var options = this.props.options;

    return (
      <PickerIOS
        style={styles.picker}
        selectedValue={this.props.selectedIdx}
        onValueChange={(idx) => this.props.selectIdx(idx)}>
        {options.map((option, idx) => {
          return <PickerIOS.Item
            key={idx}
            value={idx}
            label={option.name} />;
        })}
      </PickerIOS>
    )
  },
});

var styles = StyleSheet.create({
  picker: {
    flex: 1,
  },
});

module.exports = TraitPicker;

