

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter as Router } from 'react-router-dom';


//const history = createHistory();

const initialState = {}

const enhancers = []
const middleware = [
    thunk,
    //routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);



console.log(store.getState());

ReactDOM.render(
    
        <Provider store={store}>
            <Router>
                <div>
                    <App/>
                </div>
            </Router>
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
