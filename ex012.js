/* Crie um programa que chame uma função que verifica e imprime o maior número entre dois números informados por parâmetro */ 

const maior = (n1, n2) => {
    let max = n1
    if(n1 < n2){
        max = n2        
    }
    return console.log(max);
}

maior(1594, 1854)