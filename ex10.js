/*Escreva um programa que chama uma função enviando um número, a função imprime a tabuada do número informado.
Sendo permitido somente números de 0 a 10*/
const tabuada = (number) => {
    
    if(number > 0 && number <= 10){
        for (let i = 0; i <= 10; i++){
            console.log(`${number} x ${i} = ${number * i}`)
        }
    }else{
        console.log('Insira um valor entre 1 e 10')
    }
    
}

tabuada(10)