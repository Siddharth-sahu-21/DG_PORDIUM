const user = {name : 'Raju', email:'raju@gmail.com', address : 'lucknow'};
console.log(user);

console.log( user.name);
console.log( user.address);

user.password = 'abskfjlksdj';
user.address = 'mumbai';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'samsung',
    model : 'galaxy s23',
    price : 50000,
    color : ['black', 'white', 'grey']
};
//access price of the smartphone
console.log(smartphone.price);
//change price of smartphone to 42000
smartphone.price = 42000;
console.log(smartphone.price);
//access 2nd color of the smarthphone
console.log(smartphone.color[1]);
//update 1st color to 'red'
smartphone.color[0] = 'red';
console.log(smartphone.color);
//add a new color
//smartphone.color[3]='green';
smartphone.color.push('green');
console.log(smartphone.color);

const smartphonearray =[ {
    brand : 'samsung',
    model : 'galaxy s23',
    price : 50000,
    color : ['black', 'white', 'grey']
},
{
    brand : 'Iphone',
    model : 'iphone 16',
    price : '₹70000',
    color : ['black', 'white', 'grey']
},
{
    brand : 'one pluse',
    model : 'Nord CE',
    price : 20000,
    color : ['black', 'white', 'sky blue']
},
{
    brand : 'redmi',
    model : 'redmi 15 5G',
    price : 20000,
    color : ['black', 'white',]
},
{
    brand : 'Motorola',
    model : 'Edge 50 Fusion',
    price : 20000,
    color : ['orange', 'black', 'blue']
},
{
    brand : 'Samsung',
    model : 'Galaxy s10',
    price : 25000,
    color : ['orange', 'black', 'blue']
}
];
//access price of 2nd smartphone
console.log(smartphonearray[1].price);

//access 2nd color of last smartphone
console.log(smartphonearray[1].color);

//add new color in third smartphone
console.log(smartphonearray[2].color.push('yellow'));
console.log(smartphonearray[2].color);

//replace 1st color of 2nd smartphone
console.log(smartphonearray[0].color.splice(0,1,'orange'));
console.log(smartphonearray[0].color);


//filter all smarth phones which price are less than 50000

const budgetphone = smartphonearray.filter((phone) => {
    return phone.price < 50000;
});
console.log(budgetphone);

//filter all phones with blue color
const bluephone = smartphonearray.filter((phone) => {
    return phone.color.includes('blue')
});
console.log(bluephone);

const phonebrand = smartphonearray.map((phone) => {
    return phone.brand;
})
console.log(phonebrand);

const keyword = 'samsung';

const result = smartphonearray.filter((phone) => {
    return phone.brand.toLowerCase() === keyword.toLowerCase();
})
console.log(result);

const keywords = 'sam';
const resluts = smartphonearray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase());
});
console.log(resluts);





















