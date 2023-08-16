// Basic tools
import React,{Component} from 'react';
import { useNavigate } from 'react-router-dom'

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

export default class Lab extends Component {
  render() {
    return (
      <div className="Lab">
        <NavigationButton url="../" title="Back Home Button" />
        <h1>Lab:</h1>
        <h2>Projects:</h2>
        <NavigationButton url="../todolist" title="To Do List" />
        <NavigationButton url="../route" title="Route" />
        <NavigationButton url="../component" title="Component" />
        
      </div>
    );
  }
}