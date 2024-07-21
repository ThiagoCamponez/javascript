function funcaoDesconto(nomeCliente, valorTotalCompra, primeiraCompra, compraAvista) {
    let desconto = 0;
    let percentualDesconto = 0;
    if (primeiraCompra){
        if (compraAvista){
            if (valorTotalCompra > 1000){
                percentualDesconto = 0.30;
            } else if (valorTotalCompra > 500){
                percentualDesconto = 0.25;
            } else {
                percentualDesconto = 0.20;
            }
        } else { 
            if (valorTotalCompra > 1000){
                percentualDesconto = 0.20;
            } else if (valorTotalCompra > 500){
                percentualDesconto = 0.15;
            } else {
                percentualDesconto = 0.10;
            }
        }
    } else {
        if (compraAvista){
            if (valorTotalCompra > 1000){
                percentualDesconto = 0.20;
            } else if (valorTotalCompra > 500){
                percentualDesconto = 0.15;
            } else {
                percentualDesconto = 0.10;
            }
        } else {
            if (valorTotalCompra > 1000){
                percentualDesconto = 0.10;
            } else if (valorTotalCompra > 500){
                percentualDesconto = 0.05;
            } else {
                percentualDesconto = 0.00;
                console.log('Compra sem desconto.');
            }
        }
    }

    desconto = valorTotalCompra * percentualDesconto;

    return console.log(`Obrigado pela compra ${nomeCliente}!
    Valor da compra: ${valorTotalCompra},00
    Desconto de ${percentualDesconto * 100}%: ${desconto}
    Valor a pagar: R$${valorTotalCompra - desconto}`)
}   

funcaoDesconto('Thiago', 480, false, false)