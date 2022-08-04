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

//
function map(products) {
    let result2 = [];
    for (let i = 0; i < products.length; i++) {
        result2.push(products[i].price);
    }
    return result2;
}
console.log(map(products));
//得到結果 [200, 50, 60, 150]


//原價*0.9
let result = products.map((item) => item.price * 0.9);
console.log(result);
//得到結果 [180, 45, 54, 135]
