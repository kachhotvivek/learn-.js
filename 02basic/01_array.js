// array

// A shallow copy of an object is a copy whose properties share the same references.
// A deep copy of an object is a copy whose properties do not share the same references.

let vivek= [1, 2, 3, 4]
console.log(vivek);

// push is use to array value insert
//vivek.push(5)
// console.log(vivek);


// pop is use to array last value is delete
// vivek.pop()
// console.log(vivek);

// unshift is use to array frist value insert.
vivek.unshift(10)
console.log(vivek);

// shift is use to array frist value delete
vivek.shift()
console.log(vivek);

// check in array value
console.log(vivek.includes(5));

// check in array index 
console.log(vivek.indexOf(3));

// join use to change the data type in string and first array join in other array.
const newarray = vivek.join()

console.log(newarray);

const myn1 = [1,2,3,4,5,6]
console.log("A", myn1);

// slice is use to define index under value show.
const myn2 = myn1.slice(1, 3)
console.log("B",myn2);

// splice use to cut the value in oreignal array.
const myn3 = myn1.splice(1, 3)
console.log(myn1);
console.log("c", myn3);

