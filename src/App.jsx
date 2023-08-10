// Basic tools
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Decoration for app.jsx
import './App.css';

// Button for navigation
function NavigationButton(props) {

  //parameters for setting the route
  const url = props.url;  //define the url of routing destination
  const title = props.title;  //define the title of the button
  const data = props.data;  //the data passing to the destination page

  //please follow the below code strictly
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

// Home Page of the app
export default class App extends React.Component {
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
          <p>Functions implemented:</p>
          <NavigationButton url="./route" title="Route Page" />
          <NavigationButton url="./component" title="Component" />
          <NavigationButton url="./lab" title="Lab" />
        </header>
      </div>
    );
  }
}


