export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setDate = (startDate, endDate) => ({
  type: 'SET_DATE',
  startDate,
  endDate
});
