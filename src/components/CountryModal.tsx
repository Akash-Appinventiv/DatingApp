import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import country from '../utils/countryCode';
import localimages from '../utils/localimages';
import {normalize} from '../utils/dimensions';
const windowWidth = Dimensions.get('window').width;
const CountryModal = ({
  countryModal,
  setCountry,
  dial,
  setDial,
  flag,
  setFlag,
}: any) => {
  const setContryCode = (item: any) => {
    setDial(item.dial_code);
    setFlag(item.flag);
    setCountry(false);
  };
  const [searchtxt, setSearchtxt] = useState('');
  let filterData = country?.filter((item: any) =>
    item?.name.toLowerCase().includes(searchtxt.toLowerCase()),
  );
  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.renderView}
        onPress={() => {
          setContryCode(item);
        }}>
        <Text style={styles.flag}>{item.flag}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.code}>{item.dial_code}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.backCard}>
      <View style={styles.innerCard}>
        <Text style={styles.countryText}>{'Select a Country'}</Text>
        <View style={styles.inputView}>
          <Image style={styles.searchImg} source={localimages.search} />
          <TextInput
            placeholder="Search"
            style={styles.textInputStyle}
            onChangeText={(text: any) => {
              setSearchtxt(text);
            }}
          />
        </View>
        <FlatList
          data={filterData}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
        />
      </View>
    </View>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: normalize(20),
  },
  backCard: {
    width: windowWidth,
    backgroundColor: '#E4E5E7',
    alignSelf: 'center',
    marginTop: 'auto',
    height: '65%',
    borderRadius: 20,
    paddingVertical: 20,
  },
  innerCard: {
    borderWidth: 0,
    borderRadius: 20,
    marginHorizontal: normalize(20),
    backgroundColor: 'white',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputView: {
    borderBottomWidth: 1.2,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E4E5E7',
  },
  searchImg: {
    height: normalize(30),
    width: normalize(30),
    tintColor: 'grey',
  },
  textInputStyle: {
    height: normalize(58),
    flex: 1,
  },
  renderView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: normalize(20),
  },
  flag: {
    color: 'black',
    fontSize: normalize(26),
    width: '10%',
  },
  name: {
    color: 'black',
    width: '58%',
    fontSize: normalize(20),
  },
  code: {
    color: 'black',
    width: '20%',
    textAlign: 'right',
    fontSize: normalize(20),
  },
});
