import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setDate} from '../actions/filters';


export class Filters extends Component {
  state = {
    calendarFocused: null
  };

  onCalendarFocusChange = (calendarFocused) => this.setState(() => ({ calendarFocused }));

  render() {
    return (
      <div>
        <input type="text" value={this.props.text} onChange={e => this.props.setTextFilter(e.target.value)} />
        <select value={this.props.sortBy} onChange={e => this.props[`sortBy${e.target.value[0].toUpperCase()}${e.target.value.slice(1)}`]()}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          onDatesChange={this.props.setDate}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onCalendarFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId="start"
          endDateId="end"
        />
      </div>
    );
  }
}

const mapStateToProps = ({filters}, props) => ({
  ...filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setDate: ({ startDate, endDate }) => dispatch(setDate(startDate, endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);