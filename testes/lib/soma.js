const { pegaValorRandomico } = require('./randomico');

const soma = (a, b) => {
    return a + b;
};

const ehMenorQue5 = () => {
    return pegaValorRandomico() < 5;
};

module.exports = {
    soma,
    ehMenorQue5,
};