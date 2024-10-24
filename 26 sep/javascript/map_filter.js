const nums = [3,2,55,7,5,9];

const newNums = nums.map((n) => { return n*10});
console.log(newNums);


//add 18% gst to all prices
const price = [50,5000,5410, 600];
const newPrice = price.map((n) => { return n*1.18});
console.log(newPrice);

//fileter even numbers

const evenNums = nums.filter((n) => { return n%2===0});
console.log(evenNums);

const price2 = ['₹34.56','₹123.99', '₹89.7', '₹77.228'];

console.log(parseInt('₹34.56'.slice(1)));

const newprices = price2.map((p) => { return parseInt(p.slice(1))});
console.log(newprices);



