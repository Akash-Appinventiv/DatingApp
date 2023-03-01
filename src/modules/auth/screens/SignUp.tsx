import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import localimages from '../../../utils/localimages';
import {normalize} from '../../../utils/dimensions';
import CustomButton from '../../../components/CustomButton';
import OrCustom from '../../../components/SepratorWithText';
import CustomText from '../../../components/CustomText';
import {socialImages} from '../../../utils/dummyData';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation<any>();
  const NavigateLoginWithPhnNo = () => {
    navigation.navigate('PhoneNoLogin');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <View style={styles.mainView}>
          <Image style={styles.logoImg} source={localimages.logo} />
          <CustomText customTxt={'Sign up to continue'} />
        </View>
        <CustomButton buttonTxt={'Continue with email'} />
        <CustomButton
          buttonTxt={'Use phone number'}
          buttonTxtStyle={styles.phnNumbertxt}
          buttonStyle={styles.phnNumberStyle}
          onPress={NavigateLoginWithPhnNo}
        />
        <OrCustom OrText={'or sign up with'} />
        <View style={styles.touchableImageView}>
          {socialImages.map(item => {
            return (
              <TouchableOpacity>
                <Image source={item} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.termstxt}>{'Terms of use'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.privacytxt}>{'Privacy Policy'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    marginTop: normalize(78),
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: normalize(100),
    alignSelf: 'center',
    resizeMode: 'contain',
    // width: normalize(108),
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: normalize(60),
  },
  touchableImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // alignSelf: 'center',
    marginHorizontal: normalize(71),
    marginTop: normalize(32),
    // paddingHorizontal: 10,
    // borderWidth: 1,
  },
  termstxt: {
    marginRight: normalize(32),
    color: '#E94057',
    fontSize: 14,
    fontWeight: '400',
  },
  privacytxt: {
    color: '#E94057',
    fontSize: 14,
    fontWeight: '400',
  },
  phnNumberStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: normalize(20),
    borderColor: '#F3F3F3',
  },
  phnNumbertxt: {
    color: '#E94057',
  },
});
