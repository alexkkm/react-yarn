// Basic tools
import React,{Component} from 'react';
import { Link } from 'react-router-dom'

//TODO Fix the bug of url of gh-pages
function RouteTo(url) {
  window.location="./"+url;
  //* Needed add project name before the url, because of gh-pages function
}

//TODO FIx the button for routing
export default class RoutePage extends Component {
  render() {
    return (
      <div className="routePage">
        <h1>Route Page</h1>
        <p>First Page</p>

        <h2>Tools for changing page:</h2>
        <Link to="/">Link of back to Index</Link>
        
        <p>Button are now disable</p>
        <button onClick={()=>RouteTo("/")}>Button of back To Index</button>
        
      </div>
    );
  }
}