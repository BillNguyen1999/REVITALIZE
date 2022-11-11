import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/main-screen';
import DietScreen from '../screens/diet-screen';
import ExerciseScreen from '../screens/exercise-screen';
import SleepScreen from '../screens/sleep-screen';

const Stack = createNativeStackNavigator();

const AuthNavigationStack = () => { 
  return ( 
    <Stack.Navigator 
        initialRouteName="MainScreen"
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1e90ff",
            },
            headerTintColor: "#fff"
        }}
    >
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Diet Screen" component={DietScreen} />
        <Stack.Screen name="Exercise Screen" component={ExerciseScreen} />
        <Stack.Screen name="Sleep Screen" component={SleepScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack