import React from 'react';
import './App.css';

// Additional Functions
function RouteTo(url) {
  window.location = "./" + url;
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
          <button onClick={() => RouteTo('route')}>Route</button>
          <button onClick={() => RouteTo('component')}>Component</button>
        </header>
      </div>
    );
  }
}

function App() {
  return (
    <Home />
  );
}

export default App;
