import React, { Component } from 'react';
import './App.css';

import Router from './Router';
import NavigationBar from './components/common/NavigationBar';

class App extends Component { 
  render() {
    return (
        <div className="App">
            <NavigationBar />
            <Router />
        </div>
    );
  }
}

export default App;
