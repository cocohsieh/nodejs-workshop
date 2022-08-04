let products = [
    {
        item: 'tv',
        price: 200,
        status: 'new'
    },
    {
        item: 'table',
        price: 50,
        status: 'secondhand'
    },
    {
        item: 'chair',
        price: 60,
        status: 'secondhand'
    },
    {
        item: 'fan',
        price: 150,
        status: 'new'
    }
];

let findProduct = products.filter(function (item, index, array) {
    return item.price > 100
})
console.log(findProduct);
//結果得到tv, fan

function filter(products) {
    let findProduct2 = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 100) {
            findProduct2.push(products[i]);
        }
    }
    return findProduct2;
};
console.log(filter(products));
//結果得到tv, fan