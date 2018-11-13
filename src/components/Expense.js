import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = ({description, amount, createdAt, id}) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{numeral(amount/100).format('$0,0.00')} - {moment(createdAt).format('Do MMM, YYYY')}</p>
  </div>
);

export default Expense;