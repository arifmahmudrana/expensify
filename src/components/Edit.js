import React from 'react';
import {connect} from 'react-redux';
import {editExpense, removeExpense} from '../actions/expenses';
import Form from './Form';

export const Edit = ({editExpense, removeExpense, expense}) => (
  <div>
    <h1>Edit Expense</h1>
    <Form onSubmit={editExpense} {...expense} amount={expense.amount/100} />
    <button onClick={removeExpense}>Delete</button>
  </div>
);

const mapDispatchToProps = (dispatch, {history, match}) => ({
  editExpense: expense => {
    dispatch(editExpense({...expense, id: match.params.id}));
    history.replace('/');
  },
  removeExpense() {
    dispatch(removeExpense(match.params.id));
    history.replace('/');
  }
});

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find(i => i.id === ownProps.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);