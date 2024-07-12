min = 0
max = 10
numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min
numeroEscolhido = 2

if (numeroSorteado === numeroEscolhido){
    console.log(`${numeroSorteado} é o número sorteado. Você acertou!`)
}else{
    console.log(`${numeroSorteado} é o número sorteado. Você errou! Tente novamente.`)
}