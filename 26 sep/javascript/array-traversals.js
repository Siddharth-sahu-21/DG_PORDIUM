const nums = [4,87,9,3,2,1];

console.log('array traversals 1');
  
for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
    
}

console.log('array traversals 2');
for(let n of nums){
   console.log(n);
   
}





console.log('array traversals 3');
 nums.forEach((a) => {console.log(a);
 });
 nums.forEach((a ,b, c) => {console.log(a, b, c);
 });

 //print all even numbers
 nums.forEach((n) => {
    if(n%2 == 0){
    console.log(n);
    }
 });

 //print square of all numbers

 nums.forEach((n) => {
    console.log(n**2);
 });

 //add all odd numbers in new arrays
 const oddnums =[];

 nums.forEach((n) => {
    if(n % 2 !==0){
        oddnums.push(n);
       // console.log(oddnums);
        
    }
 });
 console.log(oddnums);

 //store to multiply every number by 10 and store in new array

 const number = [1,2,3,4,5];
 const newNumber=[];

 number.forEach((n)=>{
    
    newNumber.push(n*10);
   // console.log(newNumber);
    
 });
 console.log(newNumber);
 