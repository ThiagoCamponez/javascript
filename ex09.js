/*Escreva um programa onde, chama uma função enviando um número, a função imprime do 1 ate o número informado*/

function sequencial(num){
    let n1 = 1

    for (let i = 0; i < num; i++){
        console.log(n1)
        n1 += 1
    }

    return n1
}

sequencial(100)