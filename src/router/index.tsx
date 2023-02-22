import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFlipper} from '@react-navigation/devtools';
import SignUp from '../modules/auth/screens/SignUp';
import Walkthrough from '../modules/auth/screens/Walkthrough';
import PhoneNoLogin from '../modules/auth/screens/PhoneNoLogin';
import OtpScreens from '../modules/auth/screens/OtpScreens';

const Stack = createNativeStackNavigator();

const RootRouter = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Walkthrough"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="PhoneNoLogin" component={PhoneNoLogin} />
        <Stack.Screen name="OtpScreens" component={OtpScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
