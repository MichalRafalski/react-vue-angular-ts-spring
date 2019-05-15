import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./logo.svg";
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">
        <img src={logo} className="App-logo" alt="logo" />
        React
      </span>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Your name" aria-label="Log in"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><FontAwesomeIcon icon="user-alt" /> Log in</button>
      </form>
    </nav>
    ;
  }
}
