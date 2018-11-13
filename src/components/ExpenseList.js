import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import selectorsExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length
      ? props.expenses.map(i => <Expense {...i} key={i.id} />)
      : <p>No expenses</p>
    }
  </div>
);

const mapStateToProps = ({expenses, filters}, props) => ({
  expenses: selectorsExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);