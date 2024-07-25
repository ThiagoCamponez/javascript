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