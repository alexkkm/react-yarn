// Basic tools
import React from 'react';
import { useNavigate } from 'react-router-dom'


// Button for navigation
export default function NavigationButton(props) {

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