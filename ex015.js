function funcaoDesconto(nomeCliente, valorTotalCompra, primeiraCompra, compraAvista) {
    let desconto = 0;
    let percentualDesconto = 0;
    if (primeiraCompra === true && compraAvista === true && valorTotalCompra > 1000) {
        percentualDesconto = 0.30;
        desconto = valorTotalCompra * percentualDesconto;        
    } else if(primeiraCompra === true && compraAvista === true && valorTotalCompra < 1000 && valorTotalCompra > 500){
        percentualDesconto = 0.20;
        desconto = valorTotalCompra * percentualDesconto;
    }

    return console.log(`Obrigado pela compra ${nomeCliente}!
    Valor da compra: ${valorTotalCompra},00
    Desconto de ${percentualDesconto * 100}%: ${desconto}
    Valor a pagar: R$${valorTotalCompra - desconto}`)
}   

funcaoDesconto('Thiago', 980, true, true)