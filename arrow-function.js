const add = (num1, num2, num3) => num1 + num2 + num3;
const sum = add(10, 20, 30);


const diff = (num1, num2) => num1 - num2;
const difference = diff(50, 20);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplication = multiply(10,30,20)

const div = (num1, num2) => num1 / num2;
const division = div(50, 5);

console.log(sum, difference, multiplication, division );
const doMath = (x, y) => {
    const add = x + y;
    const diff = x + y ;
    const multiply = add * diff;
    const divide = multiply / 10;
    return divide;
}
const result = doMath(100, 50);
console.log(result);