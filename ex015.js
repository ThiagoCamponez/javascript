function funcaoDesconto(nomeCliente, valorTotalCompra, primeiraCompra, compraAvista) {
    let desconto = 0;
    if (primeiraCompra === true && compraAvista === true){
        desconto = valorTotalCompra * 0.30;
        
    }

    return console.log(`Obrigado pela compra ${nomeCliente}!
    Valor da compra: ${valorTotalCompra},00
    Desconto de 30%: ${desconto}
    Valor a pagar: R$${valorTotalCompra - desconto}`)
}   

funcaoDesconto('Thiago', 5000, true, true)