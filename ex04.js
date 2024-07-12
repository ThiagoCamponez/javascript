let numInt = [1250, 385614, 110]
let menor = 0
let maior = 0

for(let i = 0; i < numInt.length; i++){
    if(numInt[i] > maior){
        maior = numInt[i]
    }
    if(numInt[i] > menor && numInt[i] < maior){
        menor = numInt[i]
    }
}

console.log(`${maior} é o número maior e ${menor} é o número menor.`)