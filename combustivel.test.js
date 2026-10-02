const calcularGastoCombustivel = require('./combustivel');

describe('calcularGastoCombustivel', () => {
  test('deve retornar o gasto correto para gasolina', () => {
    expect(calcularGastoCombustivel(16000, 'gasolina')).toBe(1);
  });

  test('deve retornar o gasto correto para etanol', () => {
    expect(calcularGastoCombustivel(11000, 'etanol')).toBe(1);
  });

    test('deve lançar erro para distância negativa', () => {
    expect(() => calcularGastoCombustivel(-1000, 'gasolina')).toThrow('A distância deve ser um número inteiro não negativo.');
  });

  test('deve lançar erro para tipo de combustível inválido', () => {
    expect(() => calcularGastoCombustivel(1000, 'diesel')).toThrow('O tipo de combustível deve ser "gasolina" ou "etanol".');
  });
});