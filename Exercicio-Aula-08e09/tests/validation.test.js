const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

test('CREATE - Caso válido', () => {
    const result = Validation.create({
        nome: "musica011",
        visualizacoes: 1000,
        author: "YY"
    });
    expect(result).toEqual(undefined);
});

test('CREATE - Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        visualizacoes: 1000,
        author: "YY"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('UPDATE - Caso válido', () => {
    const result = Validation.update({
        nome: "musica011",
        visualizacoes: 1001,
        author: "YY"
    });
    expect(result).toEqual(undefined);
});

test('UPDATE - Caso inválido - Retirando o nome', () => {
    const result = Validation.update({
        visualizacoes: 1001,
        author: "YY"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('DELETE - Caso válido', () => {
    const result = Validation.delete({
        nome: "musica011"
    });
    expect(result).toEqual(undefined);
});

test('DELETE - Caso inválido - Retirando o nome', () => {
    const result = Validation.delete({
        visualizacoes: 1001,
        author: "YY"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
