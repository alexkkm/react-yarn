// Basic tools
import React,{Component} from 'react';
import { Link } from 'react-router-dom'


function RouteTo(url){
  window.location="./"+url;
}


export default class RoutePage extends Component {
  render() {
    return (
      <div className="routePage">
        <h1>Route Page</h1>
        <p>First Page</p>

        <h2>Tools for changing page:</h2>
        <Link to="/">Link of back to Index</Link>
        <button onClick={()=>RouteTo("index")}>Button of back To Index</button>
        
      </div>
    );
  }
}