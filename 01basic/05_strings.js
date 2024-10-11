const name = "vivek"
const recount = 55

console.log(`hello my name is ${name} and my repo count is ${recount}`);

const gamename = new String('kachhot')

// console.log(gamename[4]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('k'));

// const newstring = gamename.substring(0 , 3)
// console.log(newstring);

const anotherstring = gamename.slice(-5,-2)
console.log(anotherstring);

//strating and and  space delet and show to output
const newstrings = '    vivek      .     '
console.log(newstrings);
console.log(newstrings.trim());

//ending space delete  
console.log(newstrings.trimEnd());

// starting space delete
console.log(newstrings.trimStart());

const url = "https://hitesh.com/hitesh%20choudhary"

//url value change use to replace
console.log(url.replace('%20', '-'))

//string in find the value this value is aveleable and not aveleable 
console.log(url.includes('hitesh'))

// string under words divide.
console.log(url.split['%20',"hitesh"]);


