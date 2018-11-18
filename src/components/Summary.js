import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const Summary = ({count, total}) => (
  <div>
    <p>Viewing {count} expense{count > 1 ? 's' : ''} totalling {numeral(total).format('$0,0.00')}</p>
  </div>
);

const mapStateToProps = state => ({
  count: selectExpenses(state.expenses, state.filters).length,
  total: selectExpensesTotal(selectExpenses(state.expenses, state.filters)) / 100
});

export default connect(mapStateToProps)(Summary);