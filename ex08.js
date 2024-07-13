let numero = 11477;
let resultado = '';
let ehPrimo = '';

function parImpar(numero) {
    if (numero % 2 === 0) {
        resultado = 'Par';
        return `${numero} é Par`;
    } else {
        resultado = 'Impar';
        return `${numero} é Impar`;
    }   
}
function primo(numero) {
    if (numero < 2) {
        return `não é Primo`;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return `não é Primo`;
        }
    }
    return `é Primo`;
}

let parImparResult = parImpar(numero);

if (resultado === 'Par') {
    if (numero % 5 === 0) {
        console.log(`${parImparResult} e é divisível por 5`);
    } else {
        console.log(parImparResult);
    }
}

if (resultado === 'Impar') {
    console.log(`${parImparResult} ${primo(numero)}`);
}
