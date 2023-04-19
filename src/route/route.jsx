// Basic tools
import React,{Component} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

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

function MyComponent() {
  const myParam = "myValue";
  return <Link to={`/my-path/${myParam}`}>Go to MyClassComponent</Link>;
}


export default class RoutePage extends Component {
  render() {
    return (
      <div className="routePage">
        <h1>Route Page</h1>
        <p>First Page</p>

        <h2>Tools for changing page:</h2>
        <p>1. Link:</p>
        <Link to="/">Link of back to Home</Link>
        <p>2. Button using useNavigate():</p>
        <NavigationButton url="../" title="Back Home Button" />
        <p>3. Material-ui button using component of link:</p>
        <Button component={Link} to="../" //use "../" for backing last page
          variant="contained"
          color="secondary">
          Button of Material-ui: Back Home
        </Button>
        <h3>Route with passing parameters:</h3>
        <NavigationButton url="../routeToFunction" title="To a Function Component" data={"Message passed from RoutePage"} />
        <Link to={{ pathname: '../routeToClass', query: { myParams: "Message sent by route page" } }}><Button onClick={()=>{}}>To class Component</Button></Link>
        <Link to={{ pathname: '../routeToClass', query: { myParams: "Message sent by route page" } }}>TO</Link>
      </div>
    );
  }
}