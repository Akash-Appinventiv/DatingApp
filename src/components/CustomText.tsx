import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';

const CustomText = ({customTxt, fontStyletxt}: any) => {
  return (
    <View style={styles.textView}>
      <Text style={[styles.signUptxt, fontStyletxt]}>{customTxt}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textView: {
    marginTop: normalize(76),
  },
  signUptxt: {
    fontWeight: '700',
    fontSize: 18,
    color: 'black',
  },
});
