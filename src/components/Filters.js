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
      <div className="wrapper">
        <div className="inp-group">
          <div className="inp-group__item">
            <input
              type="text"
              className="inp-txt"
              value={this.props.text}
              onChange={e => this.props.setTextFilter(e.target.value)}
              placeholder="Search expenses"
            />
          </div>
          <div className="inp-group__item">
            <select
              className="select"
              onChange={e => this.props[`sortBy${e.target.value[0].toUpperCase()}${e.target.value.slice(1)}`]()}
              value={this.props.sortBy}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="inp-group__item">
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
        </div>        
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