import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const Summary = ({count, total}) => (
  <div className="page-header">
    <div className="wrapper">
      <h1 className="page-header__title">
        Viewing <span>{count}</span> expense{count > 1 ? 's' : ''} totalling <span>{numeral(total).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="btn" to="/create">
          Add Expense
        </Link>
      </div>      
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: selectExpenses(state.expenses, state.filters).length,
  total: selectExpensesTotal(selectExpenses(state.expenses, state.filters)) / 100
});

export default connect(mapStateToProps)(Summary);