// const tenderuser =  {
//     name : "vivek"
// }

// tenderuser.email = "vivekkachhot@gmail.com"
// tenderuser.id = "018"
// tenderuser.isloggedin = false

// // console.log(tenderuser);

// // object under object creatte 
// // create in nesting object.
// const duser = {
//     email : "vivekkachhot@gmail.com",
//     fullnem :  {
//         useername : {
//             firstname : "kachhot",
//             lastname : "vivek"
//         } 
//     }
// }

// // console.log(duser.fullnem.useername);

// // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// // The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object
// const obj ={ 1: "a", 2 : "b"}
// const obj1 ={ 3: "c", 4 : "d"}

// const obj2 = Object.assign({}, obj, obj1)

// // console.log(obj2);

// const user = [
//     {
//         id : "1",
//         email : "vivekkachhot@gmail.com"
//     },
//     {
//         id : "2",
//         email : "ritikkachhot@gmail.com"
//     },
//     {
//         id : "3",
//         email : "kuldeepkachhot@gmail.com"
//     }
// ]

// // console.log(user);
// // console.log(tenderuser);

// // every object keys are combain.
// // The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// console.log(Object.keys(tenderuser));

// // The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
// console.log(Object.values(tenderuser));

// // The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// console.log(Object.entries(tenderuser));

// // check the object under this property is include?
// // The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property.
// console.log(tenderuser.hasOwnProperty(""));



// object destroctor
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
const course = {
    coursename: "'js in hindi",
    price : "900",
    courseinstructor : "vvivek"
}

const {courseinstructor} = course
console.log(courseinstructor);
 
