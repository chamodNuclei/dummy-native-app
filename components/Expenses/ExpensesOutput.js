import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: ' e1',
    description: 'A pair of shoes',
    amount: 34.99,
    date: new Date('2022-04-27'),
  },
  {
    id: ' e2',
    description: 'A pair of bananas',
    amount: 34.99,
    date: new Date('2022-04-28'),
  },
  {
    id: ' e3',
    description: 'A pair of brush',
    amount: 34.99,
    date: new Date('2022-04-26'),
  },
  {
    id: ' e4',
    description: 'A pair of socks',
    amount: 34.99,
    date: new Date('2022-04-25'),
  },
  {
    id: ' e5',
    description: 'A pair of shoes',
    amount: 34.99,
    date: new Date('2022-04-23'),
  },
];

const ExpensesOutPut = ({expenses, expensesPeriod}) => {
  
  return (
    <View style={styles.container}>
      <ExpensesSummary period={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutPut;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});
