import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./logo.svg";
import './Navbar.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

const mapDispatchToProps = dispatch => ({
  simpleAction: (value) => dispatch(simpleAction(value))
});

const mapStateToProps = state => ({
  ...state
});

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  simpleAction = (event, value) => {
    event.preventDefault();
    this.props.simpleAction(value);
  };

  logInUser = (event) =>{
    this.simpleAction(event, this.state.inputValue);
  };

  render() {
    return <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">
        <img src={logo} className="App-logo" alt="logo" />
        React
      </span>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Your name" aria-label="Log in"
               value={this.state.inputValue}
               onChange={event => this.setState({inputValue: event.target.value})}
               disabled={this.props.simpleReducer.result}
               />
        <button className="btn btn-outline-primary my-2 my-sm-0" onClick={event => this.logInUser(event)}
                disabled={this.props.simpleReducer.result}>
          <FontAwesomeIcon icon="user-alt" /> Log in
        </button>
      </form>
    </nav>
    ;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
