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
    },
    {
        itemName: 'table',
        price: 200,
        status: 'new'
    }
];

//find() 找出陣列中第一個符合條件的元素
let result = products.find(function (item) {
    return item.itemName === 'table'
});

console.log(result);

//
function find(products) {
    let result2 = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].itemName === 'table') {
            result2.push(products[i])
            break;
        }
    }
    return result2;
};

console.log(find(products));

