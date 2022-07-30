function sum(n){
    let sumResult = 0;
    for (let i=1; i<=n; i++){
        sumResult = sumResult + i;
    }
    return sumResult;
}

console.log(sum(1));
console.log(sum(3));
console.log(sum(10));
