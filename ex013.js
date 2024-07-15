/* A prefeitura de uma cidade quer fazer uma pesquisa com seus habitantes com dados de salário e número de filhos. A prefeitura precisa de: - Média salarial da população; - Média de número de filhos; - Maior salário. O final da leitura será quando entrar um salario negativo */

class cidadao {
    constructor(salario,nFilhos){
        this.salario = salario;
        this.nFilhos = nFilhos;
    }

}

let cidadao1 = new cidadao(2000, 2);
let cidadao2 = new cidadao(3000, 3);
let cidadao3 = new cidadao(4000, 4);
let cidadao4 = new cidadao(5000, 3);
let cidadao5 = new cidadao(6000, 2);
let cidadao6 = new cidadao(7000, 0);
let cidadao7 = new cidadao(8000, 1);
let cidadao8 = new cidadao(9000, 2);

let cidadaos = [cidadao1, cidadao2, cidadao3, cidadao4, cidadao5, cidadao6, cidadao7, cidadao8];


function mediaSalario(cidadaos){
    let media = 0;
    let totPop = cidadaos.length
    for(let i = 0; i < totPop; i++){
        media += cidadaos[i].salario;
    }
    let resultado = media / totPop
    return resultado
}

function mediaFilhos(cidadaos){
    let media = 0;
    let totPop = cidadaos.length
    for(let i = 0; i < totPop; i++){
        media += cidadaos[i].nFilhos;
    }
    return media / totPop
}

console.log(`A média salarial da população é R$${mediaSalario(cidadaos)},00
A média de filhos é ${mediaFilhos(cidadaos)}`);