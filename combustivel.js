function calcularGastoCombustivel(distanciaMetros, tipoCombustivel) {
    if (typeof distanciaMetros !== 'number' || distanciaMetros < 0) {
        throw new Error('A distância deve ser um número inteiro não negativo.');
    }
    if (typeof tipoCombustivel !== 'string' || (tipoCombustivel !== 'gasolina' && tipoCombustivel !== 'etanol')) {
        throw new Error('O tipo de combustível deve ser "gasolina" ou "etanol".');
    }
    
    const distanciaKm = distanciaMetros / 1000;
    let consumo;

    if (tipoCombustivel === 'gasolina') {
        consumo = distanciaKm / 16;
    } else {
        consumo = distanciaKm / 11;
    }
    return Math.ceil(consumo);
}

    module.exports = calcularGastoCombustivel;