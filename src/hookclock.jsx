import React, {useEffect, useState} from 'react';

// Clock implement by React Hook
export function HookClock(){
    const [time,updateTime]=useState(0);

    const getTime=()=>{
        let timeInfo=new Date();
        let month=((timeInfo.getMonth())+1<10?'0':'')+(timeInfo.getMonth()+1);
        let day=((timeInfo.getDate())<10?'0':'')+(timeInfo.getDate());
        let hours=((timeInfo.getHours())<10?'0':'')+(timeInfo.getHours());
        let minutes=((timeInfo.getMinutes())<10?'0':'')+(timeInfo.getMinutes());
        let seconds=((timeInfo.getSeconds())<10?'0':'')+(timeInfo.getSeconds());
        return month+"/"+day+" "+hours+":"+minutes+":"+seconds;
    }

    useEffect(()=>{     // after the components was build do the followings===ComponentDidMount()
        let time=getTime();
        
        const delay=setInterval(()=>{   // create a time variable and start timer
            updateTime(time=>getTime()) // when the time limit reached, do this line: updateTime()
        },1000)     // time limit set to be 1000ms = 1 second

        return()=>{     // ===componentWillMount()
            clearInterval(delay);   // clear the content of time variable
        }
    },[]);

    return(
        <div className="clock">
            <h3>Hook Clock</h3>
            <p>Date and Time: {time}</p>
        </div>
    )
    
}

