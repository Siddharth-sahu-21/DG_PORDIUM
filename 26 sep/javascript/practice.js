//Grade calculator
marks = 55;
if(marks>=90){
    console.log('A Grade');
    
}
else if(marks>=70){
    console.log('B Grade');
    
}
else if(marks>=50){
    console.log('C Grade');
    
}
else{
    console.log('D Grade');
    }


    //number is divisible by 7 & 11 or not.
num = 77;
if(num%7==0 && num%11==0){
    console.log('Number is divisible by both 7 and 11');
}
else{
    console.log('Number is not divisible by both 7 & 11');
    
}

//cheack weather the number is perfect square or not.
function isperfect_square(nums){
    const sqrt = Math.sqrt(nums);
    return Number.isInteger(sqrt);

}
const nums = 14;
if(isperfect_square(nums)){
    console.log('nums' + ' is perfect square root');
    
}
else{
    console.log('nums' + ' is not perfect square root');
    
}