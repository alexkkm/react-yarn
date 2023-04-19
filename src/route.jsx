// Basic tools
import React,{Component} from 'react';
import { Link, useNavigate } from 'react-router-dom'

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


export default class RoutePage extends Component {
  render() {
    return (
      <div className="routePage">
        <h1>Route Page</h1>
        <p>First Page</p>

        <h2>Tools for changing page:</h2>
        <Link to="/">Link of back to Home</Link>
        
        <p>Button are now disable</p>
        
      </div>
    );
  }
}