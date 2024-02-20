const numbers = [45, 65, 23, 98, 19];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}

for(const number of numbers){
    //console.log(number);
}

const products = [
    {id : 1 , name : 'Xaomi phone', price : 19000},
    {id : 2 , name : 'I phone', price : 19000},
    {id : 3 , name : 'Mac book Air Laptop', price : 19000},
    {id : 5 , name : 'lenovo yoga laptop', price : 19000},
    {id : 6 , name : 'dell inspiron', price : 19000},
    {id : 7 , name : 'samsung note 7 Phone', price : 19000},
    {id : 8 , name : 'nokia old phone', price : 19000}
]

for(const product of products){
 //   console.log(product);
}

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
          if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
          }
       }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);