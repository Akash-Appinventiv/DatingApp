import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {normalize} from '../../../utils/dimenstions';
import {walkthroughText, walthroughImages} from '../../../utils/dummyData';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const renderSpace = () => {
  return <View style={{width: normalize(65)}} />;
};

const Walkthrough = () => {
  const listRef = useRef<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(currentIndex < 2 ? currentIndex + 1 : 0);
    }, 3000);
  }, [currentIndex]);

  const renderImages = ({item, index}: any) => {
    listRef?.current?.scrollToIndex({
      index: currentIndex,
      viewPosition: 0.5,
      animated: true,
    });
    return (
      <Image
        source={item}
        style={
          currentIndex === index
            ? styles.carouselActiveImage
            : styles.carouselInactiveImage
        }
        blurRadius={currentIndex === index ? 0 : 6}
      />
    );
  };
  const NavigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.carouselContainer}>
        <FlatList
          ref={listRef}
          data={walthroughImages}
          renderItem={renderImages}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={renderSpace}
          ListFooterComponent={renderSpace}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.textContainer}>
        {walkthroughText.map((item, index) => {
          if (index === currentIndex) {
            return (
              <React.Fragment key={index}>
                <Text style={styles.textHeader}>{item.title}</Text>
                <Text style={styles.textBody}>{item.body}</Text>
              </React.Fragment>
            );
          }
          return null;
        })}
        <View style={styles.indicatorContainer}>
          {[0, 1, 2].map(item => {
            return (
              <View
                style={
                  item === currentIndex ? styles.activeDot : styles.inactiveDot
                }
                key={item}
              />
            );
          })}
        </View>
      </View>
      <CustomButton buttonTxt={'Create an Account'} onPress={NavigateSignUp} />
      <Text style={styles.haveAccountText}>
        {'Already have an account? '}
        <Text style={styles.signInText}>Sign In</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  contentContainer: {height: '100%'},
  carouselContainer: {
    height: '46.3%',
    marginTop: normalize(20),
  },
  carouselActiveImage: {
    height: '100%',
    marginHorizontal: normalize(12),
    borderRadius: normalize(15),
  },
  carouselInactiveImage: {
    height: '90%',
    marginHorizontal: normalize(12),
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: normalize(15),
  },
  textContainer: {
    marginHorizontal: normalize(40),
    marginTop: normalize(44),
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: normalize(40),
    justifyContent: 'space-between',
  },
  textHeader: {
    color: '#E94057',
    fontWeight: '700',
    fontSize: normalize(24),
    marginBottom: normalize(10),
  },
  textBody: {
    textAlign: 'center',
    color: '#323755',
    fontSize: normalize(14),
    marginBottom: normalize(30),
  },
  activeDot: {
    backgroundColor: '#E94057',
    height: normalize(8),
    width: normalize(8),
    borderRadius: normalize(5),
  },
  inactiveDot: {
    height: normalize(8),
    width: normalize(8),
    backgroundColor: '#00000019',
    borderRadius: normalize(5),
  },
  haveAccountText: {
    fontSize: normalize(16),
    textAlign: 'center',
    marginTop: normalize(20),
  },
  signInText: {
    fontSize: normalize(15),
    fontWeight: '700',
    color: '#E94057',
    lineHeight: normalize(21),
  },
});
