import React, {useState} from 'react'
import PropTypes from 'prop-types'

const PropsDemo = () => {

    const [ color, setColor ] = useState('white')
    const [ backgroundColor, setBackgroundColor ] = useState('purple')
    const [ borderRadius, setBorderRadius ] = useState('5px')
    const [ borderStyle, setBorderStyle ] = useState('dashed')
    const [ display, setDisplay ] = useState('inline-block')
    const [ width, setWidth ] = useState('350px')
    const [ textAlign, setTextAlign ] = useState('center')
    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    }
    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor("white")
    }
    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor("green") : setBackgroundColor("purple")
    }
    const toggleBorderStyle  = () => {
        borderStyle === 'dashed' ? setBorderStyle("solid") : setBorderStyle("dashed")
    }
    const toggleTextAlign  = () => {
        textAlign === "center" ? setTextAlign("right") : setTextAlign("center")
    }

    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                <FunctionalComponent string="will this display?" function={toggleColor} selectedStyle={color} />
              
                <FunctionalComponent string="here we go agian" function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                
                <FunctionalComponent string="my first solution was somewhat incorrect." function={toggleBorderStyle} selectedStyle={borderStyle}/>
                
                <FunctionalComponent string="so i commented it out and left it below" function={toggleTextAlign} selectedStyle={textAlign}/>
                
                
                </div>
            </div>
        </div>
    )
}
const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={ props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    )
}
export default PropsDemo



FunctionalComponent.defaultProps ={
    string: 'This is wild',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle : 'what Style??'
}
FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}




// const PropsDemo = () => {
//     return (
//         <div className='main'>
//             <div className='mainDiv'>
//                 <FunctionalComponent string={["will this display?", "how about this?", "[2] sits here", 'and a 4th to complete the assignment']}/>
//                 <FunctionalComponent string="here we go agian"/>
//             </div>
//         </div>
//     )
// }
// const FunctionalComponent = (props) => {
//     return(
//         <div>
//             <p>{props.string[0]}</p>
//             <p>{props.string[1]}</p>
//             <p>{props.string[2]}</p>
//             <p>{props.string[3]}</p>
//             <p>{props.string}</p>
//         </div>
//     )
// }