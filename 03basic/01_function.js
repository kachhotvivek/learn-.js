// function

function myname(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
    
}
// myname();

//  function addtwo(number1, number2) {
//     console.log(number1 + number2);
    
// }


function addtwo(number1, number2) {
    let resualt = number1 + number2                                        
    return resualt 
}

const resualt = addtwo(3,6)
// console.log("resual is : ", resualt);

function loginusermassage(username) {
    return `${username} just logged in`
}

// any value not pass and print is undefined 
// console.log(loginusermassage());

// if else use in function
function userlogged(usern) {
    if (usern === undefined) {
        console.log("Please enter a user name");
    } else {
        console.log(`${usern} just logged in`);
    }
}

// console.log(userlogged());

// rest opretor
function calculatecartprice(...num1) {
    return num1
}
console.log(calculatecartprice(10, 20, 30));

const user = {
    username : "vivek",
    price : 2000
}

function handleobject(anyobject) {
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// console.log(handleobject(user));

const myNewArray = [200, 400, 500, 900]

function returnsecondvalue(getarray) {
    return getarray[1]
}

// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200, 400, 500, 900]));
