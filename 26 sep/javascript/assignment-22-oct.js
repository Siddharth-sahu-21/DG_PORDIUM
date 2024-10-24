//filter the price which is greater than 500
const price = [5250, 820, 750, 200, 900, 65, 78];

const newPrice= price.filter((p) => { return p>500});
console.log(newPrice);

//wap to reverse the number
const Reverse_Number = (num) => {
    let reverse = 0;
    while(num != 0){
        let digit = num % 10;
        reverse= reverse * 10 + digit;
        num = parseInt(num/10);       
    }
    return reverse;
    
}

const number =Reverse_Number(8475);
console.log(number);


//wap to print sum of all number from 20 to 50
const sums =(num1, num2) => {
    let sum = 0;
    for(i=num1; i<num2; i++){
        sum = sum +i;
    }
    console.log(sum);
    
}
const sumofall =sums(20,51);
console.log(sumofall);






