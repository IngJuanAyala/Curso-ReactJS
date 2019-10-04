import React from 'react';


class Button extends React.Component{

    state = {
        count: 0,
    }
    handleClick = ()=>{
        this.setState({
            count: this.state.count + 1,
        })
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                <h1>Manzanas: {count}</h1>
            <button type="button" onClick={this.handleClick}>Agregar</button>
        </div>
        )
    }
}

// const Button = props => {
//     const { text } = props;
//     return (
//         <div>
//             {/* Mostrar valor asignado en el valor de un botón */}
//             {/* <button type="button">{props.text}</button> */}
//             <button type="button">{text}</button>
//         </div>
//     )
// };

export default Button;