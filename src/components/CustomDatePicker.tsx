import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import moment from 'moment';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize} from '../utils/dimensions';
import CustomButton from './CustomButton';
import localimages from '../utils/localimages';

interface calendarPickerProps {
  value: string;
  onSelect: (date: string) => void;
}

const CustomDatePicker = ({value, onSelect}: calendarPickerProps) => {
  const maxDate = moment()
    .year(moment().get('year') - 18)
    .format('YYYY-MM-DD');

  const marker = {
    selected: true,
    startingDay: true,
    color: '#E94057',
    endingDay: true,
    customTextStyle: {
      fontWeight: '700',
      color: '#FFFFFF',
    },
  };

  const theme = {
    dayTextColor: '#000000',
    arrowColor: '#000000',
    textDisabledColor: '#000000',
    stylesheet: {
      calendar: {
        main: {
          borderWidth: 1,
        },
      },
    },
  };

  const initialDate = JSON.parse(
    JSON.stringify({
      date: marker,
    }).replace('date', maxDate),
  );

  const insets = useSafeAreaInsets();
  const [date, setDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(maxDate.toString());
  const [visible, setVisible] = useState(false);

  const onSelectDate = (day: DateData) => {
    let markedDates: any = {};
    markedDates[day.dateString] = marker;
    setDate(markedDates);
    setSelectedDate(moment(day.dateString).format('DD MMMM YYYY'));
  };

  const handleModal = () => {
    setVisible(!visible);
  };
  const handleSave = () => {
    if (onSelect) {
      onSelect(selectedDate);
    }
    setVisible(false);
  };

  const renderHeader = (day: any) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.birthDayText}>{'Birthday'}</Text>
        <Text style={styles.yearStyle}>
          {moment(day.toJSON()).format('YYYY')}
        </Text>
        <Text style={styles.monthStyle}>
          {moment(day.toJSON()).format('MMMM')}
        </Text>
      </View>
    );
  };

  const renderModal = () => {
    return (
      <Modal visible={visible} transparent animationType={'slide'}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleModal}
          style={styles.modalStyle}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.contentContainer, {paddingBottom: insets.bottom}]}>
            <Calendar
              initialDate={value !== '' ? value : maxDate}
              maxDate={maxDate}
              theme={theme}
              onDayPress={onSelectDate}
              markingType={'period'}
              markedDates={date}
              renderHeader={renderHeader}
              hideDayNames={true}
              hideExtraDays
            />
            <CustomButton
              onPress={handleSave}
              buttonTxt={'Save'}
              buttonStyle={styles.saveButton}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={handleModal}
        activeOpacity={0.8}
        style={styles.chooseButton}>
        <Image style={styles.calendarIcon} source={localimages.CALENDAR} />
        <Text style={styles.chooseButtonText}>
          {value !== '' ? value : 'Choose birthday date'}
        </Text>
      </TouchableOpacity>
      {renderModal()}
    </React.Fragment>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: '#00000080',
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: normalize(46),
    borderTopRightRadius: normalize(30),
    borderTopLeftRadius: normalize(30),
    paddingHorizontal: normalize(40),
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: normalize(17),
  },
  yearStyle: {
    lineHeight: normalize(40),
    fontSize: normalize(34),
    fontWeight: '700',
    color: '#E94057',
    marginTop: normalize(5),
    shadowColor: '#E9405733',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 1,
    shadowRadius: 5,

    elevation: 5,
  },
  monthStyle: {
    color: '#E94057',
    lineHeight: normalize(21),
  },
  birthDayText: {
    color: '#000000',
    marginBottom: normalize(5),
    lineHeight: normalize(21),
  },
  saveButton: {
    marginHorizontal: 0,
    marginTop: normalize(39),
  },
  chooseButton: {
    marginTop: normalize(10),
    width: '100%',
    height: normalize(58),
    backgroundColor: '#E9405719',
    borderRadius: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  calendarIcon: {
    height: normalize(20),
    width: normalize(18),
    marginRight: normalize(20),
  },
  chooseButtonText: {
    color: '#E94057',
    fontWeight: '700',
    fontSize: normalize(14),
  },
});
