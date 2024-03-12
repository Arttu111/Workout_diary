import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text } from 'react-native';
import AddWorkout from './screens/AddWorkout';
import WorkoutHistory from './screens/WorkoutHistory';

import Header from './components/Header';
import Footer from './components/Footer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, marginTop: 30 }}> 
        <Header title={<Text>Workout diary</Text>} />
        <Stack.Navigator>
          <Stack.Screen name="AddWorkout" component={AddWorkout} />
          <Stack.Screen name="WorkoutHistory" component={WorkoutHistory} />
         
        </Stack.Navigator>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
