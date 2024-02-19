const nayok = {
    name : 'Shakib Khan',
    id : 121,
    address : 'movie Cinema',
    isSingle : true,
    friend  : ['Apu ', 'Raaz', 'salman', 'amir'],
    movies : [{name : 'no. 1', year : 2015}, {name : 'king khan', year : 2018}],
    act: function(){
        console.log('Acting Like shakib khan')
    },
    car : {
        brand : 'tesla',
        price : '5000000',
        made : 2025,
        manufacturer : {
            name : 'tesla',
            CEO : 'Elon mask',
            country : 'USA'
        }
    }
}

console.log(nayok.car);
nayok.act();
console.log(nayok.act());

