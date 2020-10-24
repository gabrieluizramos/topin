import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        console.log(props);
        super(props);

        this.state = {
            contador: 0
        };
    }

    updateCount = () => {
        const newContador = this.state.contador + 1;
        this.setState({
            contador: newContador
        });
        this.props.onUpdate(newContador);
    }

    render() {
        const {
            children
        } = this.props;

        const { contador } = this.state;
        
        return (
            <button onClick={this.updateCount}>
                {children} contador é {contador}
            </button>
        );
    }
}

export default Button;