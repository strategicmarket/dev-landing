import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './components/Banner';
import Docs from './components/Docs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Banner} />
            <Route path='/other' component={Docs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
