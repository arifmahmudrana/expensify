import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export const Create = ({addExpense}) => (
  <div>
    <h1>Add Expense</h1>
    <Form onSubmit={addExpense} />
  </div>
);

const mapDispatchToProps = (dispatch, {history}) => ({
  addExpense: expense => {
    dispatch(addExpense(expense));
    history.replace('/');
  }
});

export default connect(() => ({}), mapDispatchToProps)(Create);