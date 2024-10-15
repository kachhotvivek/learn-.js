// singleton
// The Object type represents one of JavaScript's data types.
// Objects can be created using the Object() constructor or the object initializer / literal syntax.

// sumbal variable declear
const mySym = Symbol("hie shree")

// object literals
const jsuser ={
    name : "vivek",
    age : 20,
    // symbol  key word use in object in use to breket.
    [mySym] : "noot now",
    location : "jaipur",
    email : "vivekkachhot@gmail.com",
    iloggedin : false
}

// simple methode in obj print
console.log(jsuser.name);

// real method in obj print
console.log(jsuser["location"]);

// symbol in object print
console.log(jsuser[mySym]);

// obbject value change
jsuser.email = "kachhotvivek@gmail.com"

// objeect value fix freeze in object and not change a value in object.
// Object.freeze(jsuser)
console.log(jsuser);

// create a function in object.
jsuser.geeting = function(){
    console.log("hello shree.....");
}

console.log(jsuser.geeting());

// display the object under particular value find and print.
jsuser.geetingtwo = function(){
    console.log(`hello shree.....,${this.name}`);
}
console.log(jsuser.geetingtwo());
