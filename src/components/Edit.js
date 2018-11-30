import React from 'react';
import {connect} from 'react-redux';
import {updateExpense, deleteExpense} from '../actions/expenses';
import Form from './Form';

export const Edit = ({updateExpense, deleteExpense, expense}) => (
  <div>
    <div className="page-header">
      <div className="wrapper">
        <h1>Edit Expense</h1>
      </div>
    </div>
    <div className="wrapper">
      <Form onSubmit={updateExpense} {...expense} amount={expense.amount/100} />
      <button className="btn btn--secondary" onClick={deleteExpense}>Remove Expense</button>
    </div>    
  </div>
);

const mapDispatchToProps = (dispatch, {history, match}) => ({
  updateExpense: expense => {
    dispatch(updateExpense({...expense, id: match.params.id}));
    history.replace('/');
  },
  deleteExpense() {
    dispatch(deleteExpense(match.params.id));
    history.replace('/');
  }
});

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find(i => i.id === ownProps.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);