import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Main, Working, SmallPause, LongPause, Over} from './pages';

const StackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Over">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Working" component={Working} />
      <Stack.Screen name="SmallPause" component={SmallPause} />
      <Stack.Screen name="LongPause" component={LongPause} />
      <Stack.Screen name="Over" component={Over} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default Routes;
