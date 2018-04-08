import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts'
import { getCategories } from './readableAPI'
import { Route } from 'react-router-dom'

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
        <Route path="/posts" render={() => (<Posts></Posts>) } />
      </div>
    );
  }
}

export default App;
