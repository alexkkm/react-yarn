import React from 'react';
import withRouter from './withRouter';  // Tools for perfroming route with parameters
import { Link } from 'react-router-dom';

class RouteToClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        id: this.props.params.id,
      };
    }
    render(){
        console.log("e: "+this.state.id);
        return (
            <div>
                <Link to={{ pathname: '../route'}}><button>Back</button></Link>
                <h2>This is a page of Class Component</h2>
                <p>Value passing from Route Page:</p>
                <p>id:{this.state.id}</p>
            </div>
        );
    } 
}

export default withRouter(RouteToClass);