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

    // Sincroniza com todas as variáveis de estado
    // useEffect(() => {
    //     console.log('olar');
    // }, [contadorSemState]);

    // Executa só ao criar o componente
    // useEffect(() => {
    //     console.log('olar');
    // }, []);

    // Executa ao criar e ao desmontar
    // useEffect(() => {
    //     console.log('olar');
    //     return () => console.log('xau');
    // }, []);


    return (
        <button onClick={onClickButton}>
            {children} contador é {contador} <br />
            {nome}
        </button>
    );
}



export default Button;