import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUserAlt);

const mapStateToProps = state => ({
    ...state
});

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navbar/>
          <header className="App-header">
            <p>
                Welcome {this.props.simpleReducer.result} to <code>React</code> app.
            </p>
          </header>
        </div>
    )
  }
}

export default connect(mapStateToProps)(App);
