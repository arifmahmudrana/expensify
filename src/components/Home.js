import React from 'react';
import ExpenseList from './ExpenseList';
import Filters from './Filters';
import Summary from './Summary';

const Home = () => (
  <div>
    <Summary />
    <Filters />
    <ExpenseList />
  </div>
);

export default Home;