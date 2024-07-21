/*Escreva um programa onde, chama uma função enviando um número, a função imprime do 1 ate o número informado*/

const sequencial = (num) => {
    for (i = 1; i < num; i++){
        console.log('Contando...' + i)
    }

    return i
}

sequencial(10)