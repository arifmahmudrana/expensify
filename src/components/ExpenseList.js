import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import selectorsExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="wrapper">
    <div className="list-header">
      <div className="show-mobile">Expenses</div>
      <div className="show-desktop">Expense</div>
      <div className="show-desktop">Amount</div>
    </div>
    {
      props.expenses.length
      ? props.expenses.map(i => <Expense {...i} key={i.id} />)
      : <div className="list-item list-item--msg"><span>No expenses</span></div>
    }
  </div>
);

const mapStateToProps = ({expenses, filters}, props) => ({
  expenses: selectorsExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);