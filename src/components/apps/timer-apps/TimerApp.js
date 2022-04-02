import React, { useState,useEffect } from 'react'


const TimerApp = () => {
    const [secondsElasped, setSecondsElasped] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => tick(), 1000)
       // console.log(interval)
        return () => clearInterval(interval)
    })
    
    const tick = () => setSecondsElasped(secondsElasped + 1)
    return(
        <div>
            <h1 className="section-title">React Timer</h1>
            <div>Seconds Elapsed: {secondsElasped}</div>
        </div>
    )
}

export default TimerApp