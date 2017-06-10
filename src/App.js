import React, { Component } from 'react';
import logo from './logo.svg';
import Overview from './Overview'
import Pathology from './Pathology'
import './App.css';
import Home from './Home'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)*/
/*
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
*/

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home}/>
      <Route path="/overview" component={Overview}/>
      <Route path="/pathology" component={Pathology}/>*/}
    </div>
  </Router>
)
export default App