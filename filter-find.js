const numbers = [10, 15, 200, 150, 500, 650, 50, 40]
const bigNumbers = numbers.filter(number => number > 100);
const smallNumbers = numbers.filter(number => number < 200);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    {name: 'cap', price: 20, color: 'white'},
    {name: 'mobile phone', price: 13000, color: 'green'},
    {name: 'pen', price: 10, color: 'blue'},
    {name: 'charger', price: 120, color: 'white'},
    {name: 'shirt', price: 500, color: 'red'},
]
// const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const reds = products.find(product => product.color == 'red');
console.log(reds);