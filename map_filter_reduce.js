const myNums = [1,2,3,4,5,6,7,8,9,10];

// map
const newNums1 = myNums.map( (num) => num+10);
console.log(newNums1);

// reduce
const newNums2 = myNums.reduce((acc,curr) => acc+curr,0)
console.log(newNums2);


// filter
const newNums3 = myNums.filter((num) => num>5);
console.log(newNums3);
