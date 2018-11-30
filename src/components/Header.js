import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">  
    <div className="wrapper header__container">
      <Link className="header__title" to="/dashboard">
        <h1>ExpensiFy</h1>
      </Link>
      <button className="btn btn--link" onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);