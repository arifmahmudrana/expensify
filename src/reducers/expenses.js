export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
        return state.map(i => i.id === action.expense.id ? {...i, ...action.expense} : i);
    case 'SET_EXPENSES':
        return action.expenses;
    default:
      return state;
  }
};