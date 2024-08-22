var arr = new Array(3);

for(let i=0;i<arr.length;i++){
    arr[i] = i*5;
    console.log(arr[i]);
}

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];


const all_heros = marvel_heros.concat(dc_heros);   // to add two arrays
console.log(all_heros);
// or
const all_new_heros = [...marvel_heros, ...dc_heros];   // to add two arrays
console.log(all_new_heros);


// Array of

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// copy within:- 

let arr2 = [1,2,3,4,5,6,7,8,9];
arr2.copyWithin(1,3,5); // copy the value from index 3 to 4 in the index 1, which is 4,5 -> [1,4,5,4,5,6,7,8,9];
console.log(arr2);

let arr3 = [1,2,3,4];
arr3.copyWithin(1,3);
console.log(arr3);
