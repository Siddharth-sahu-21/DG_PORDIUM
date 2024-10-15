for(let i = 0; i< 10; i++){
    console.log(i);
}

//print even number between 50 to 100
for(let i=50; i<=100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

// print all numbers divisible by 7 between 30 t0 99

for(let i=30; i<=99; i++){
    if(i%7 === 0){
        console.log(i);
    }
}

// while loop
console.log('while loop');
let b=10;
while(b<20){
    console.log(b);
    b++;
}

// Do-while loop
console.log('Do-while loop')
let a=20;
do{
    console.log(a);  
    a++; 
} while(a<30)

    //cheack weather if a number is prime or not
    console.log('prime number');

    const y=20;

    for(let i=2; i< y; i++){
        if(y%i===0){
            console.log( ' not prime');
            prime = false;
            break;
        }

    }
    if(prime) console.log('prime');
    
    

