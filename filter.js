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


for(let i = 0; i < products.length; i++){
    if(products[i].price > 100){
        console.log(products[i].item)
    }
}
//結果得到tv, fan