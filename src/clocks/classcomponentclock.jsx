import {Component} from "react";

// Clock implement by Class Component
export default class ClassComponentClock extends Component{
    constructor(props){
        super(props);
        this.state={
            time: getTime()
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({time: getTime()})
        },1000)
    }

    render(){
        return(
            <div className="clock">
                <h3>Class Component Clock</h3>
                <p>Date and Time: {this.state.time}</p>
            </div>
        )
    }
}

const getTime=()=>{
    let timeInfo=new Date();
    let month=((timeInfo.getMonth())+1<10?'0':'')+(timeInfo.getMonth()+1);
    let day=((timeInfo.getDate())<10?'0':'')+(timeInfo.getDate());
    let hours=((timeInfo.getHours())<10?'0':'')+(timeInfo.getHours());
    let minutes=((timeInfo.getMinutes())<10?'0':'')+(timeInfo.getMinutes());
    let seconds=((timeInfo.getSeconds())<10?'0':'')+(timeInfo.getSeconds());
    return month+"/"+day+" "+hours+":"+minutes+":"+seconds;
}