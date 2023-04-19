import React from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';


// Button for navigation
function NavigationButton(props) {

  const url = props.url;
  const title = props.title;
  const data = props.data;

  const navigate = useNavigate();

  const route = () => {
    navigate(url, { state: { id: 1, data: data } });
  }

  return (
    <div>
      <button onClick={() => { route() }}>{title}</button>
    </div>
  );
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
          <h3>Navigation Button</h3>
          <NavigationButton url="./test" title="To test" data={"Message passed from Home"} />
          <NavigationButton url="./route" title="To route" />
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
