export const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
    case 'UPDATE':
    case 'DELETE':
    default:
      return state;
  }
};
 