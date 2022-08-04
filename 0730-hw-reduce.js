let values = [6, 3, 5, 4, 8];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum);

function sum2(num, values) {
    return num + values;
}

let result = values.reduce(sum2);
console.log(result)