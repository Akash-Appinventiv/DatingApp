import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
interface Props {
  buttonTxt?: any;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTxtStyle?: StyleProp<TextStyle>;
  onPress?: any;
}
const CustomButton = (props: Props) => {
  const {buttonTxt, buttonStyle, buttonTxtStyle, onPress} = props;
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, buttonTxtStyle]}>{buttonTxt}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E94057',
    borderRadius: 10,
    padding: normalize(16),
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: normalize(32),
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
