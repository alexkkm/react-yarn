import React from 'react';
import { useLocation } from 'react-router-dom';

export default class RouteToClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        myParams: props.myParams,
      };
    }
    render(){
        console.log("e: "+this.state.myParams);
        return (
            <div>
                <h2>This is Second page</h2>
                <p>{this.state.myParams}</p>
            </div>
        );
    }
    
    
}