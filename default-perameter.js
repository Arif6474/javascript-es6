function fullName (firstName, lastName='islam'){
    const name = firstName + ' ' + lastName; 
    return name;
}
const result = fullName('arif');
console.log(result);