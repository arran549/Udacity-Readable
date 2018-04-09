import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import MainMenu from './components/MainMenu'
import { getCategories } from './readableAPI'
import { Route, Switch, DefaultRoute } from 'react-router-dom'

class App extends Component {



  render() {
    const categories = []
    
    getCategories().then(res => {
      categories.push(res)
    });

    

    return (
      <div >
        <MainMenu></MainMenu>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts"  component={Posts} />
          <Route path="/:category" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default App;
