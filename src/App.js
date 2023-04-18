import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// Additional Functions
//TODO Fix the bug of url of gh-pages
function RouteTo(url) {
  window.location = "./" + url;
  //* Needed add project name before the url, because of gh-pages function
}

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h2>Home Page</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Yarn Start with gh-pages</p>
          <Link to="/route">Link of back to Index</Link>
          <Link to="/component">Link of back to Index</Link>
          <button onClick={() => RouteTo('route')}>Route</button>
          <button onClick={() => RouteTo('component')}>Component</button>
        </header>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}
