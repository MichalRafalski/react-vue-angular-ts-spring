import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUserAlt);

export default class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navbar/>
          <header className="App-header">
            <p>
              Welcome to <code>React</code> app.
            </p>
          </header>
        </div>
    )
  }
}

