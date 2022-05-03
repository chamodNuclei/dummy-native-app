import {createSlice} from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expensesList',
  initialState: {
    expensesList: [],
  },
  reducers: {
    setExpensesList: (state, action) => {
      state.expensesList.push(action.payload);
    },
    removeExpenseFromList: (state, action) => {
      state.expensesList.splice(
        state.expensesList.indexOf({id: action.payload.id}),
      );
    },
    updateExpensesList: (state, action) => {
      let updatedExpenseList = state.expensesList.map(expense => {
        if (expense.id == action.payload.id) {
          expense.id = action.payload.id;
          expense.description = action.payload.description;
          expense.amount = action.payload.amount;
          expense.date = action.payload.date;
        }
        return expense;
      });

      state.expensesList = updatedExpenseList;
    },
  },
});

export const setExpensesList = expensesSlice.actions.setExpensesList;
export const updateExpensesList = expensesSlice.actions.updateExpensesList;
export const removeExpenseFromList =
  expensesSlice.actions.removeExpenseFromList;
export const expenseReducer = expensesSlice.reducer;
