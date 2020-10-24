import React, { useState, useEffect } from 'react';

const Button = ({ children, onUpdate, nome }) => {
    let contadorSemState = 0;
    const [contador, setContador] = useState(0);
    
    const onClickButton = (e) => {
        setContador(contador + 1);
        onUpdate(contador + 1);
        contadorSemState++;
        console.log('clicou')
    };

    useEffect(() => {
        console.log('olar');
    }, [contadorSemState]);

    return (
        <button onClick={onClickButton}>
            {children} contador é {contador} <br />
            {nome}
        </button>
    );
}

// class Button extends Component {
//     constructor(props) {
//         console.log(props);
//         super(props);

//         this.state = {
//             contador: 0
//         };
//     }

//     updateCount = () => {
//         this.setState({
//             contador: this.state.contador + 1
//         });
//     }

//     render() {
//         const {
//             children
//         } = this.props;

//         const { contador } = this.state;
        
//         return (
//             <button onClick={this.updateCount}>
//                 {children} contador é {contador}
//             </button>
//         );
//     }
// }

export default Button;