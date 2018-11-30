import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {storeExpense} from '../actions/expenses';

export const Create = ({storeExpense}) => (
  <div>
    <div className="page-header">
      <div className="wrapper">
        <h1>Add Expense</h1>
      </div>
    </div>
    <div className="wrapper">
      <Form onSubmit={storeExpense} />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, {history}) => ({
  storeExpense: expense => {
    dispatch(storeExpense(expense));
    history.replace('/');
  }
});

export default connect(() => ({}), mapDispatchToProps)(Create);