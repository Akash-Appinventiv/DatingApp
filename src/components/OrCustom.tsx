import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function OrCustom({OrText}: any) {
  return (
    <View style={styles.ORparent}>
      <View style={styles.orinner}></View>
      <Text style={styles.ortxt}>{OrText}</Text>
      <View style={styles.orinner1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ORparent: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 10,
    marginHorizontal: 40,
  },
  orinner: {
    borderBottomWidth: 0.6,
    borderBottomColor: 'grey',
    flex: 1,
    marginHorizontal: 8,
  },
  ortxt: {
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
  },
  orinner1: {
    borderBottomWidth: 0.6,
    borderBottomColor: 'grey',
    flex: 1,
    marginHorizontal: 8,
  },
});
