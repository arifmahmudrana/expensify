import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="selected" to="/" exact>Home</NavLink>
    | <NavLink activeClassName="selected" to="/create">Create</NavLink> 
    | <NavLink activeClassName="selected" to="/help">Help</NavLink>
  </header>
);

export default Header;