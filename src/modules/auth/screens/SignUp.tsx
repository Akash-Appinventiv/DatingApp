import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../../../utils/localimages';
import {normalize} from '../../../utils/dimensions';
import CustomButton from '../../../components/CustomButton';
import OrCustom from '../../../components/OrCustom';
import CustomText from '../../../components/CustomText';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'red'} barStyle="dark-content" />
      <View style={styles.mainView}>
        <Image style={styles.logoImg} source={images.logo} />
        <CustomText customTxt={'Sign up to continue'} />
      </View>
      <CustomButton buttonTxt={'Continue with email'} />
      <CustomButton
        buttonTxt={'Use phone number'}
        buttonTxtStyle={{color: '#E94057'}}
        buttonStyle={{
          backgroundColor: 'white',
          borderWidth: 0.2,
          marginTop: normalize(20),
        }}
      />
      <OrCustom OrText={'or sign up with'} />
      <View style={styles.touchableImageView}>
        <TouchableOpacity>
          <Image source={images.Fb} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.Google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.Apple} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: normalize(60),
        }}>
        <Text style={{marginRight: normalize(32)}}>{'Terms of use'}</Text>
        <Text>{'Privacy Policy'}</Text>
      </View>
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
    marginTop: normalize(128),
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: normalize(100),
    width: normalize(108),
  },
  //   signUptxt: {
  //     marginTop: normalize(79),
  //     fontWeight: '700',
  //     fontSize: 18,
  //     color: 'black',
  //   },
  footer: {
    flexDirection: 'row',
    marginTop: normalize(70),
    // justifyContent: 'space-between',
    // alignSelf: 'center',
    // paddingHorizontal: 20,
  },
  touchableImageView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: normalize(32),
  },
});
