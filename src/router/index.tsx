import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFlipper} from '@react-navigation/devtools';
import SignUp from '../modules/auth/screens/SignUp';

const Stack = createNativeStackNavigator();

const RootRouter = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
