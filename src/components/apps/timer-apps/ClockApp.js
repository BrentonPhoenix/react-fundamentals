import React, {useState, useEffect} from 'react'


const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date
}
const ClockApp = () => {
    const [ time, setTime] = useState(getTimeString())
    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString()
            setTime(date)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return(
        <div>
            <h1 className='section-title'>React Clock</h1>
            <hr className="explanation"/>
            <p>Indianapolis E.S.T: {time}</p>
            {/* <p>Chicago C.D.T. {time}</p>  looks like i'd need to make a new date because i cant just add or subtract 1 to get a nearby timezone research toTimeString and come back after i've had a break to try again*/}
        </div>
    )
}
export default ClockApp