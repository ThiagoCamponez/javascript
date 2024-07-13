let numero = 1594;

function parImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é Par`;
    } else {
        return `${numero} é Impar`;
    }
}

console.log(parImpar(numero))

function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return `${numero} não é Primo`;
        } else {
            return `${numero} é Primo`;
        }
    }
}