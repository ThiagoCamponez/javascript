let valorInicial = 50000;
let valorAtual = 50300;
let tempoMeses = 1;

function calcTaxaJuros(valorInicial, valorAtual, tempoMeses) {
    let juros = valorAtual - valorInicial;
    let taxaJuros = (juros / valorInicial) / tempoMeses;
    let taxaJurosPercentual = (taxaJuros * 100).toFixed(2);

    return `${taxaJurosPercentual}%`;
}

console.log(`Investimento inicial: R$${valorInicial},00; Valor atual do investimento: R$${valorAtual},00; O lucro foi R$${valorAtual - valorInicial},00; A taxa de juros foi de ${calcTaxaJuros(valorInicial, valorAtual, tempoMeses)} por mês.`);
