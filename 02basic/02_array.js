// array part 2

const marvel = ["thor", "ironman", "hulk", "thenoh"];
const dc = ["superman", "flash", "batman"];

console.log(marvel);
console.log(dc);

// push all elements from a second array into the first one.
// marvel.push(...dc)
// console.log(marvel)

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// marvel.concat(dc)
// console.log(marvel.concat(dc));

// spread opretor 
const all_heros = [...marvel, ...dc]
console.log(all_heros);

// return a new array with all sub-aarray elements concatenated into it recursively up to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 8, [4, 6], 9, 10]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// check the array
console.log(Array.isArray("vivek"));

// create the array for string the array
console.log(Array.from("vivek"));

// not created ayyar for not pass any variable
console.log(Array.from({name: "vivek"}));


// multiple variable convert to array use to Array.of key word
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


