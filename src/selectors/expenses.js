import moment from 'moment';
export default (expenses, {text = '', sortBy, startDate, endDate}) => {
  expenses = expenses.filter(expense => {
    const textMatch = expense.note.toLowerCase().includes(text.toLowerCase()) || expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = !startDate || moment(expense.createdAt).isSameOrAfter(startDate, 'day');
    const endDateMatch = !endDate || moment(expense.createdAt).isSameOrBefore(endDate, 'day');

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }

    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });

  return expenses;
}