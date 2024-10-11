// // primitive data type

// // 1. string
// // 2. number
// // 3. boolearn
// // 4. null
// // 5. undefined
// // 6. symbol use to value uniqe
// // 7. bigint

// const score = 100
// const scorevalue = 100.8

// const isloggedin = false
// const outsidetemp = null
// let useremail;

// const id= Symbol('123')
// const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bignumber = 98976532122222

// console.log(bignumber)

// // reference data type (non primitive)

// // 1. array
// // 2. objects
// // 3. function


// const heros = ["shatiman", "nagaraj", "ironman", "thor"];
// let myobj = {
//     name: "vivek",
//     age: 20,
// }

// const myFunction = function() {
//     console.log("hello vivek");
// }

// myFunction()

// console.log(heros)


// Stack (primitive), Heap(non primiive)

let myyoutubename = "vivekkachhot"

let anothername = myyoutubename
anothername = "vivek"

console.log(myyoutubename);
console.log(anothername);

let userone = {
    email : "user@vk.com",
    upi : "user@ybl"
}

let usertwo =userone

usertwo.email = "viekkachhor.com"

console.log(userone.email);
console.log(usertwo.email);