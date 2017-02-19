import React, { PropTypes } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Animated, Picker} from 'react-native'

// external libs
import ToggleBox from 'react-native-show-hide-toggle-box'

// styles
import styles from './TogglePickerStyle'

class TogglePicker extends React.Component {

  static propTypes = {
    androidBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    androidPickerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    androidPickerWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    arrowColor: PropTypes.string,
    arrowDownType: PropTypes.string,
    arrowSize: PropTypes.number,
    arrowUpType: PropTypes.string,
    enabled: PropTypes.bool,
    expanded: PropTypes.bool,
    iosBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    iosPickerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    iosPickerWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    onValueChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }
  static defaultProps = {
    androidBoxStyle: {},
    androidPickerStyle: {},
    androidPickerWrapperStyle: {},
    arrowColor: 'rgb(178, 178, 178)',
    arrowDownType: 'keyboard-arrow-down',
    arrowSize: 30,
    arrowUpType: 'keyboard-arrow-up',
    expanded: false,
    iosBoxStyle: {},
    iosPickerStyle: {},
    iosPickerWrapperStyle: {},
    value: '',
  }

  renderPicker = () => (
    <Picker
      selectedValue={this.props.selectedValue}
      onValueChange={this.props.onValueChange}
      prompt={this.props.prompt}
      style={Platform.OS === 'ios' ? [styles.iosPicker, this.props.iosPickerStyle] : [styles.androidPicker, this.props.androidPickerStyle]}
    >
      {this.props.children}
    </Picker>
  )

  renderIos = () => (
    <ToggleBox label={this.props.label} value={this.props.value} style={[styles.toggleBox, this.props.iosBoxStyle]}>
      <View style={this.props.iosPickerWrapperStyle}>
        {this.renderPicker()}
      </View>
    </ToggleBox>
  )

  renderAndroid = () => (
    <View style={this.props.androidBoxStyle}>
      <Label>
        {this.props.label}
      </Label>
      <View style={this.props.androidPickerWrapperStyle}>
        {this.renderPicker()}
      </View>
    </View>
  )

  render() {
    return (
      Platform.OS === 'ios' ?
        this.renderIos() : this.renderAndroid()
    )
  }
}
export default TogglePicker
