const arr = [56,'hello', true, undefined, 556.266];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
console.log(typeof arr);
console.log(Array.isArray(arr));

console.log(arr.length);

const movie =['BatMan','Animal','Deadpool','1920','Avengers age of Altron'];
console.log( movie[2]);
console.log(movie.indexOf('BatMan'));
console.log(movie[100]);
console.log(movie.indexOf('Animal'));
console.log(movie.at(-3));


//slicing
console.log(movie.slice(1,3));
console.log(movie.slice(1,4));
console.log(movie.slice(0,5));
console.log(movie.slice(1,50));

//adding and removing elements
movie.push('Avengers End Game');//adds at the end
movie.unshift('Flash');//adds at the start
console.log(movie);

movie.pop();//removes from the end
movie.shift();//remove from the start
console.log(movie);

//remove element from anywhere
movie.splice(2,2);//here first 2 represent the index no in array and second 2 is for removing how many numbers of elements.
console.log(movie);
//movie.splice(2,2,'ahazam','zero');     //here splice is used to remove and insert new elements in an array.
movie.splice(2,2, 'shazam','Jumangi', 'Harry potter');
console.log(movie);












