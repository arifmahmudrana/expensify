import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class Form extends Component {
  constructor(props) {
    super(props)
    const {description, note, amount, createdAt, id} = this.getExpensesAttributes(props);
    this.state = {
      id,
      description,
      note,
      amount,
      createdAt: moment(createdAt),
      calendarFocused: false,
      error: ''
    };
  }
  getExpensesAttributes(props) {
    const {description = '', note = '', amount = '', createdAt, id = ''} = props;

    return {description, note, amount, createdAt, id};
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id && this.props.id && prevProps.id !== this.props.id) {
      const {description, note, amount, createdAt, id} = this.getExpensesAttributes(this.props);
      this.setState(() => ({
        id,
        description,
        note,
        amount,
        createdAt: moment(createdAt)
      }));
    }
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  onCreatedAtChange = createdAt => createdAt && this.setState(() => ({ createdAt }));
  onCalendarFocusChange = ({ focused }) => this.setState(() => ({ calendarFocused: focused }));
  onSubmit = (e) => {
    e.preventDefault();
    let error = '';
    if (!this.state.description || !this.state.amount) {
      error = 'Please provide description & amount'
    }

    this.setState(() => ({
      error
    }));

    if (!error) {
      const {description, amount, note, createdAt} = this.state
      this.props.onSubmit({
        description: description.trim(), 
        amount: parseFloat(amount, 10) * 100, 
        note: note.trim(), 
        createdAt: createdAt.valueOf()
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onCreatedAtChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button type="submit">{this.props.id ? 'Edit' : 'Add'} Expense</button>
        </form>
      </div>
    );
  }
}

export default Form;