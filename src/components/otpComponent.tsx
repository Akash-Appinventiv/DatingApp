import React from 'react';
import {View, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import {normalize, vh, vw} from '../utils/dimensions';
//TODO:CONVERT THIS TO FUNCTIONAL COMPONENT
const getOTPTextChucks = (
  inputCount: number,
  inputCellLength: number,
  text: string,
) => {
  let otpText =
    text.match(new RegExp('.{1,' + inputCellLength + '}', 'g')) || [];
  otpText = otpText.slice(0, inputCount);

  return otpText;
};

type OTPTextViewPropsType = {
  isvalid?: boolean;
  tintColor?: string | undefined;
  inputCount?: number | undefined;
  defaultValue?: string | undefined;
  offTintColor?: string | undefined;
  inputCellLength?: number | undefined;
  handleTextChange?: (text: string) => void | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
};

class OTPTextView extends React.PureComponent {
  inputs: any;
  constructor(props: OTPTextViewPropsType) {
    super(props);
    this.state = {
      focusedInput: -1,
      otpText: getOTPTextChucks(
        props.inputCount,
        props.inputCellLength,
        props?.defaultValue,
      ),
    };

    this.inputs = [];
  }
  basicValidation = (text: string) => {
    const validText = /^[0-9]+$/;
    return text.match(validText);
  };

  /**
   * @param text
   * @param i
   * @returns
   */
  onTextChange = (text: string, i: number) => {
    const {
      inputCount,
      inputCellLength,
      handleTextChange,
    }: OTPTextViewPropsType = this.props;
    if (text && !this.basicValidation(text)) {
      return;
    }

    this.setState(
      prevState => {
        let {otpText}: any = prevState;
        otpText[i] = text;

        return {
          otpText,
        };
      },

      () => {
        if (handleTextChange) {
          handleTextChange(this.state.otpText.join(''));
        }
        if (text.length === inputCellLength && i !== inputCount - 1) {
          this.inputs[i + 1].focus();
        }
      },
    );
  };
  clear = () => {
    this.setState(
      {
        otpText: [],
      },
      () => {
        this.inputs[0].focus();
        this.props.handleTextChange('');
      },
    );
  };

  onInputFocus = (e: any, i: number) => {
    const {otpText}: any = this.state;
    const prevIndex = i - 1;

    if (prevIndex > -1 && !otpText[prevIndex] && !otpText.join('')) {
      this.inputs[prevIndex].focus();
      return;
    }

    if (e.nativeEvent.key === 'Backspace') {
    }
    this.setState({focusedInput: i});
  };

  onKeyPress = (e: any, i: number) => {
    const val = this.state.otpText[i] || '';
    const {handleTextChange, inputCellLength}: any = this.props;
    const {otpText}: any = this.state;
    if (e.nativeEvent.key === 'Backspace' && i !== 0) {
      if (val.length === 0) {
        if (otpText[i - 1].length === inputCellLength) {
          this.setState(
            prevState => {
              let {otpText}: any = prevState;
              otpText[i - 1] = otpText[i - 1]
                .split(' ')
                .splice(0, otpText[i - 1].length - 1)
                .join(' ');
              return {
                otpText,
              };
            },
            () => {
              handleTextChange(this.state.otpText.join(''));
              this.inputs[i - 1].focus();
            },
          );
        }
      }
    }
  };

  render() {
    const {
      tintColor,
      inputCount,
      offTintColor,
      keyboardType,
      inputCellLength,
      ...textInputProps
    }: OTPTextViewPropsType = this.props;

    const {focusedInput, otpText}: any = this.state;
    const TextInputs = [];

    for (let i = 0; i < inputCount; i++) {
      const inputStyle = [styles.textInput, {borderColor: offTintColor}];

      if (focusedInput === i || otpText[i]) {
        inputStyle.push({borderColor: tintColor, color: 'white'});
      }
      if (!this.props.isvalid && otpText[i]) {
        inputStyle.push({backgroundColor: '#E94057'});
      }

      TextInputs.push(
        <TextInput
          ref={e => {
            this.inputs[i] = e;
          }}
          placeholder={'0'}
          caretHidden={true}
          key={i}
          multiline={false}
          style={inputStyle}
          autoCorrect={false}
          value={otpText[i] || ''}
          autoFocus={i === 0}
          keyboardType={keyboardType}
          maxLength={inputCellLength}
          selection={{start: 1, end: 1}}
          onFocus={e => this.onInputFocus(e, i)}
          onKeyPress={e => this.onKeyPress(e, i)}
          onChangeText={text => this.onTextChange(text, i)}
          {...textInputProps}
        />,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.textInputView}>{TextInputs}</View>
      </View>
    );
  }
}

export default React.memo(OTPTextView);

const styles = StyleSheet.create({
  container: {
    marginTop: vh(32),
    marginHorizontal: vw(20),
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    width: vw(49),
    height: vh(49),
    borderWidth: vw(1),
    textAlign: 'center',
    padding: normalize(0),
    fontSize: normalize(22),
    borderRadius: normalize(8),
    color: 'red',
  },
});
