let products = [
    {
        itemName: 'tv',
        price: 200,
        status: 'new'
    },
    {
        itemName: 'table',
        price: 50,
        status: 'secondhand'
    },
    {
        itemName: 'chair',
        price: 60,
        status: 'secondhand'
    },
    {
        itemName: 'fan',
        price: 150,
        status: 'new'
    }
];
let result = products.map((item) => item.itemName);
console.log(result);

//
function map(products) {
    let result2 = [];
    for (let i = 0; i < products.length; i++) {
        result2.push(products[i].itemName);
    }
    return result2;
}
console.log(map(products));
