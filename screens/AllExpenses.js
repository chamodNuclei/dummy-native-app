import React from 'react';
import ExpensesOutPut from '../components/Expenses/ExpensesOutput';
import {useSelector} from 'react-redux';

const AllExpenses = () => {
  const expenses = useSelector(state => {
    return state.expenses.expensesList;
  });
  
  return <ExpensesOutPut expensesPeriod={'Total'} expenses={expenses} />;
};

export default AllExpenses;
