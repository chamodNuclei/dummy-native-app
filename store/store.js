import {configureStore} from '@reduxjs/toolkit';
import { expenseReducer } from './expenses/expenses';

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
