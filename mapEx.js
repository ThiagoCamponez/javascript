/*
O método .map() em JavaScript é usado para criar um novo array ao aplicar uma função a cada elemento de um array existente. Ele itera sobre cada elemento do array original, aplica a função fornecida a cada elemento e retorna um novo array com os resultados.

*/

const productsAndPrices = [
    { name: 'Iphone', price: 1000 },
    { name: 'Notebook', price: 2000 },
    { name: 'Tablet', price: 1500 },
    { name: 'Mouse', price: 50 },
    { name: 'Headset', price: 300 }
];

const productFormated = product => {
    const reajustedPrice = product.price * 1.4;
    return `O ${product.name} custa R$${reajustedPrice.toFixed(2)}`
};

const newProducts = productsAndPrices.map(productFormated);

newProducts.forEach(product => console.log(product));