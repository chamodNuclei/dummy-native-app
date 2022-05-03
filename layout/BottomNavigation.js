import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from '../screens/AllExpenses';
import RecentExpense from '../screens/RecentExpenses';
import {GlobalStyles} from '../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/UI/IconButton';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          borderRadius: 16,
          height: 100,
          padding: 20,
          elevation:0,
          position: 'absolute',
          right: 20,
          left: 20,
          
          
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,

        headerRight: ({tintColor}) => {
          return (
            <IconButton
              icon={'add'}
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate('ManageExpense');
              }}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name={'hourglass'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={'calendar'} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
//nipunika.v@sliit.lk

export default BottomNavigation;
