import React from 'react';
import ExpensesOutPut from '../components/Expenses/ExpensesOutput';
import { useSelector } from 'react-redux';

const RecentExpense = () => {

  const recentExpenses = useSelector((state)=>{return state.expenses.expensesList });

  return (<ExpensesOutPut expensesPeriod={'Last 7 days'} expenses={recentExpenses} />);
};

export default RecentExpense;
