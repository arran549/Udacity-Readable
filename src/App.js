import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './readableAPI'

class App extends Component {



  render() {
    const categories = []
    
    getCategories().then(res => {
      console.log(res);
      categories.push(res)
      console.log(categories)
    });

    

    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
