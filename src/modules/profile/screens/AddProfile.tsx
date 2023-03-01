import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {normalize} from '../../../utils/dimensions';
import localimages from '../../../utils/localimages';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomDatePicker from '../../../components/CustomDatePicker';
import CustomButton from '../../../components/CustomButton';

const AddProfile = () => {
  const inputRef = useRef<Array<any>>([]);
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    dob: '',
  });

  const setFirstName = (text: string) => {
    setDetails({...details, firstName: text});
  };

  const setLastName = (text: string) => {
    setDetails({...details, lastName: text});
  };

  // console.log('Name', `${details.firstName} ${details.lastName}`);

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          bounces={false}>
          <TouchableOpacity activeOpacity={1} style={styles.skipButton}>
            <Text style={styles.skipText}>{'Skip'}</Text>
          </TouchableOpacity>
          <Text style={styles.headingText}>{'Profile details'}</Text>
          <View style={styles.profileImageContainer}>
            <Image source={localimages.PROFILE} style={styles.imageStyle} />
            <TouchableOpacity activeOpacity={0.8} style={styles.cameraButton}>
              <Image source={localimages.CAMERA} />
            </TouchableOpacity>
          </View>
          <CustomTextInput
            ref={ref => (inputRef.current[0] = ref)}
            placeholder="First Name"
            value={details.firstName}
            onChangeText={setFirstName}
            onSubmitEditing={() => {
              inputRef.current[1].focus();
            }}
          />
          <CustomTextInput
            ref={ref => (inputRef.current[1] = ref)}
            placeholder="Last Name"
            value={details.lastName}
            onChangeText={setLastName}
            containerStyle={{marginTop: normalize(14)}}
          />
          <CustomDatePicker
            value={details.dob}
            onSelect={date => {
              setDetails({...details, dob: date});
            }}
          />
          <CustomButton
            buttonTxt={'Confirm'}
            buttonStyle={styles.confirmButton}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(AddProfile);

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    height: '100%',
    paddingHorizontal: normalize(40),
  },
  headingText: {
    marginTop: normalize(48),
    fontSize: normalize(34),
    fontWeight: '700',
    color: '#000000',
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginTop: normalize(7),
  },
  skipText: {
    fontSize: normalize(15),
    fontWeight: '700',
    color: '#E94057',
  },
  profileImageContainer: {
    marginTop: normalize(91),
    alignSelf: 'center',
    marginBottom: normalize(37),
  },
  imageStyle: {
    height: normalize(99),
    width: normalize(99),
    borderRadius: normalize(25),
  },
  cameraButton: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    height: normalize(34),
    width: normalize(34),
  },
  confirmButton: {marginHorizontal: 0, marginTop: normalize(88)},
});
