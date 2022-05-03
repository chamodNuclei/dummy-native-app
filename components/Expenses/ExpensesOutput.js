import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

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
