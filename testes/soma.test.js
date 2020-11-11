const { soma, ehMenorQue5 } = require('./lib/soma');
const { pegaValorRandomico } = require('./lib/randomico');

jest.mock('./lib/randomico');

describe('Soma', () => {
    it('Soma deve somar dois números', () => {
        const resultado = soma(1, 2);
        const esperado = 3;
    
        expect(resultado).toEqual(esperado);
    });
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Eh menor que 5', () => {
    it('retorna verdadeiro caso seja menor que 5', () => {
        pegaValorRandomico.mockReturnValueOnce(4);
        expect(ehMenorQue5()).toEqual(true);
        expect(pegaValorRandomico).toHaveBeenCalledTimes(1);
    });

    it('retorna falso caso seja maior que 5', () => {
        pegaValorRandomico.mockReturnValueOnce(7);
        expect(ehMenorQue5()).toEqual(false);
        expect(pegaValorRandomico).toHaveBeenCalledTimes(1);
    });
});