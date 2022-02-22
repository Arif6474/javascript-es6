const numbers = [73, 35, 44, 47, 46, 74];
const output = [];
for (const number of numbers){
    const result = number * 5;
    output.push(result);
}
// console.log(output);
const doubleIt = numbers.map(x => x * 2);
const squares = numbers.map (x => x * x)
console.log(doubleIt, squares);

