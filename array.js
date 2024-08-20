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
