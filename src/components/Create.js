import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {storeExpense} from '../actions/expenses';

export const Create = ({storeExpense}) => (
  <div>
    <h1>Add Expense</h1>
    <Form onSubmit={storeExpense} />
  </div>
);

const mapDispatchToProps = (dispatch, {history}) => ({
  storeExpense: expense => {
    dispatch(storeExpense(expense));
    history.replace('/');
  }
});

export default connect(() => ({}), mapDispatchToProps)(Create);