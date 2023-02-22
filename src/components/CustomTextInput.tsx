import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {normalize} from '../utils/dimensions';

interface inputProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const hitslop = {
  bottom: normalize(18),
  top: normalize(18),
  left: normalize(20),
  right: normalize(20),
};

const CustomTextInput = React.forwardRef(
  (
    {
      placeholder,
      value = '',
      onChangeText,
      onSubmitEditing,
      containerStyle,
    }: inputProps,
    ref: any,
  ) => {
    const animatedRef = useRef(new Animated.Value(0)).current;

    const animatedStyle = () => {
      if (value === '') {
        return {
          transform: [
            {
              translateY: animatedRef.interpolate({
                inputRange: [0, 1],
                outputRange: [0, normalize(-26)],
                extrapolate: 'clamp',
              }),
            },
            {
              scale: animatedRef.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.8],
                extrapolate: 'clamp',
              }),
            },
          ],
        };
      }
      return {
        transform: [
          {
            translateY: normalize(-26),
          },
          {
            scale: 0.8,
          },
        ],
      };
    };

    const startAnimateion = () => {
      if (value === '') {
        Animated.timing(animatedRef, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    };

    const blurAnimation = () => {
      if (value === '') {
        Animated.timing(animatedRef, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    };

    return (
      <View style={[styles.inputContainer, containerStyle]}>
        <AnimatedTouchable
          activeOpacity={0.8}
          onPress={startAnimateion}
          style={[styles.placeholderContainer, animatedStyle()]}>
          <Text style={styles.placeholderStyle}>{placeholder}</Text>
        </AnimatedTouchable>
        <TextInput
          ref={ref}
          style={styles.inputStyle}
          autoCorrect={false}
          hitSlop={hitslop}
          onFocus={startAnimateion}
          onBlur={blurAnimation}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    );
  },
);

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E8E6EA',
    borderRadius: normalize(15),
    height: normalize(58),
    paddingVertical: normalize(18),
    paddingHorizontal: normalize(20),
  },
  placeholderContainer: {
    paddingHorizontal: normalize(8),
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: normalize(20),
    top: normalize(18),
  },
  placeholderStyle: {
    color: '#00000066',
    fontSize: normalize(14),
    width: 'auto',
  },
  inputStyle: {
    padding: 0,
    color: '#000000',
  },
});
