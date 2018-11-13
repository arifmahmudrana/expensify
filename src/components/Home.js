import React from 'react';
import ExpenseList from './ExpenseList';
import Filters from './Filters';

const Home = () => (
  <div>
    <Filters />
    <ExpenseList />
  </div>
);

export default Home;