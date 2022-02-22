const friends = ['shoaib', 'jobair', 'saif emon', 'shahid', 'nayeem talukder']
const frndLength = friends.map(f => f.length);
// console.log(frndLength);

const products = [
    {name: 'cap', price: 20, color: 'white'},
    {name: 'mobile phone', price: 13000, color: 'green'},
    {name: 'pen', price: 10, color: 'blue'},
    {name: 'charger', price: 120, color: 'white'},
    {name: 'shirt', price: 500, color: 'red'},
]
const productName = products.map(product => product.name);
const productPrice = products.map (product => product.price);
// console.log(productName, productPrice);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));