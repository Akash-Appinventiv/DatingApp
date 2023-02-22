import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {normalize} from '../../../utils/dimensions';
import CustomButton from '../../../components/CustomButton';
import localimages from '../../../utils/localimages';
import Modal from 'react-native-modal';
import CountryModal from '../../../components/CountryModal';
import {useNavigation} from '@react-navigation/native';
const PhoneNoLogin = () => {
  const [countryModal, setCountryModal] = React.useState<boolean>(false);
  const [dial, setDial] = React.useState<string>('+91');
  const [flag, setFlag] = React.useState<string>('🇮🇳');
  const navigation = useNavigation<any>();
  const toggleModal = () => {
    setCountryModal(!countryModal);
  };
  const NavigateOtp = () => {
    navigation.navigate('OtpScreens');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.mobileTxt}>{'My mobile'}</Text>
        <Text style={styles.digitTxt}>
          {
            'Please enter your valid phone number. We will send you a 4-digit code to verify your account. '
          }
        </Text>
      </View>

      <Modal isVisible={countryModal} style={{margin: 0}}>
        <CountryModal
          country={countryModal}
          setCountry={setCountryModal}
          dial={dial}
          setDial={setDial}
          flag={flag}
          setFlag={setFlag}
        />
      </Modal>

      <View style={styles.numberView}>
        <TouchableOpacity onPress={toggleModal} style={styles.countryChoose}>
          <Text style={styles.flagtxt}>{flag}</Text>
          <Text style={styles.flagtxt}>({dial})</Text>
          <Image style={styles.bckdrop} source={localimages.BackDrop} />
          <Text style={styles.textLineStyle}>{'|'}</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Number"
          keyboardType="numeric"
          maxLength={10}
          selectionColor={'grey'}
          style={styles.inputStyle}
        />
      </View>
      <CustomButton
        buttonStyle={{marginTop: normalize(64)}}
        buttonTxt={'Continue'}
        onPress={NavigateOtp}
      />
    </SafeAreaView>
  );
};

export default PhoneNoLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: normalize(128),
    marginHorizontal: normalize(40),
  },
  mobileTxt: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: normalize(51),
    color: 'black',
  },
  digitTxt: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: normalize(21),
    color: 'black',
  },
  numberView: {
    marginTop: normalize(32),
    marginHorizontal: normalize(40),
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: normalize(10),
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: '#E8E6EA',
  },
  countryChoose: {
    width: '40%',
    paddingHorizontal: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagtxt: {
    fontSize: 16,
    color: 'black',
  },
  bckdrop: {
    left: normalize(5),
  },
  inputStyle: {
    borderColor: '#E8E6EA',
    height: normalize(58),
    flex: 1,
    fontSize: 16,
    marginLeft: normalize(20),
  },
  textLineStyle: {
    left: normalize(20),
    fontSize: 25,
    bottom: normalize(3),
    opacity: 0.5,
    color: 'grey',
  },
});
