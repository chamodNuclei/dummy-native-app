import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpenses';
import {Provider} from 'react-redux';

// components import for the nav
import BottomNavigation from './layout/BottomNavigation';
import {GlobalStyles} from './constants/styles';

// store import
import {store} from './store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
       
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
