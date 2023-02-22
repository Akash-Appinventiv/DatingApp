import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import OtpComponent from '../../../components/otpComponent';
import localimages from '../../../utils/localimages';
import {normalize} from '../../../utils/dimensions';
import TimerComponent from '../../../components/TimerComponent';
import {useNavigation} from '@react-navigation/native';
const OtpScreens = () => {
  const navigation = useNavigation<any>();
  const [otp, setOtp] = useState('');
  const [timerCount, setTimerCount] = React.useState(20);
  const handleOtp = (text: any) => {
    setOtp(text);
  };
  const NavigateGoBack = () => {
    navigation.goBack();
  };

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimerCount(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={NavigateGoBack} style={styles.backIcon}>
        <Image source={localimages.backbtn} />
      </TouchableOpacity>
      <View style={styles.timerHeader}>
        <Text style={styles.timer}>{`00:${timerCount}`}</Text>
        <Text style={styles.verifyCode}>
          {'Type the verification code we’ve sent you'}
        </Text>
      </View>
      <View style={{marginTop: 40}}>
        <OtpComponent
          defaultValue=""
          inputCount={6}
          tintColor={'#E94057'}
          offTintColor={'#E8E6EA'}
          inputCellLength={1}
          handleTextChange={handleOtp}
          keyboardType="numeric"
          //   isvalid={success}
        />
      </View>
      {!timerCount && (
        <TouchableOpacity style={styles.sendView}>
          <Text style={styles.sendtxt}>{'Send again'}</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default OtpScreens;

const styles = StyleSheet.create({
  backIcon: {
    marginHorizontal: normalize(40),
    marginTop: normalize(44),
  },
  timerHeader: {
    marginTop: normalize(32),
    alignItems: 'center',
    marginHorizontal: 80,
  },
  timer: {
    fontSize: 34,
    fontWeight: '700',
    color: 'black',
  },
  verifyCode: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: normalize(8),
    color: 'black',
  },
  sendView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: normalize(64),
  },
  sendtxt: {
    color: '#E94057',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '700',
  },
});
