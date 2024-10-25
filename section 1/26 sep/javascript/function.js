function addnums(a , b)
{
 var c=a+b;
console.log(c);

}

addnums(250,55202);
addnums(250,55452);
addnums(121250,552);
addnums(25055,552);
// console.log(c);

const getAvg = function(m1,m2,m3) {

    const avg = (m1 + m2 + m3)/3;
    //console.log(avg);
    return avg;
}
//getAvg(52,52,74);
const result = getAvg(52,52,74);
console.log(result);


//factorial of number.
const factorial = (n) => {
    let f=1;
    for(let i=1; i<=n; i++){
        f=f*i;
    }
    return f;
}

const ans=factorial(5);
console.log(ans);


//create a function to cheack if a number is even or odd
 const cheackeven = (n) => {
    if(n%2==0){
        return 'even';
    }
    else
    {
        return 'odd';
    }
 }
 const res=cheackeven(45);
 console.log(res);

 //create a function to take time of the day greet accordingly

 const greedingTime = (n) =>{
    if(n==="morning"){
        return "Good Morning";

    }
    else if(n==="afternoon"){
        return "Good afternoon";
    }
    else if(n==="evening"){
        return "Good evening";
    }
    else if(n==="night"){
        return "Good night";
    }
    else
    {
        return "Good day"
    }
    
 }

 const time= greedingTime("night");
 console.log(time);

 //create a function to cheack if a number is prime or not

 const primeNumber = (num) =>{
    if (num%2===0) {
        return "not prime";
    }
    else{
        return "prime";

    }
 }
  const number=primeNumber(19);
  console.log(number);

  
 
 






