

// block scope
if (true) {
    let a = 10
    const b = 20
    var c = 40
}

//  var data type is declaer in scope outside.
// console.log(a);
// console.log(b);
// console.log(c);


// nestdep scope
function one() {
    const username = "vivek"

    function two() {
        const websit = "youtube"
        console.log(username); 
        console.log(websit);
        
    }
    // not use to scope outside
    // console.log(websit);
    
    two()
}

// one()
// console.log(2+"2");


if (true) {
    const username = "vivek"
    if (username === "vivek") {
        const websit = " youtube"
        //  two variable name in console log enter and use for subtrction and output is NaN.
        console.log(username - websit);  
        // use for Addition.   
        console.log(username + websit);     
    }
    // this is not a print.
    // console.log(websit);
}
// this is not print.
// console.log(username);



// console.log(2+"2");
// console.log(2-"2");
// console.log(2*"2");
// console.log(2**"3");
// console.log(2/"2");
// console.log(2%"3");

// +++++++++++++++++++++++++++++++++ consepte ++++++++++++++++++++++++++++++++++++++++++++++++
//  nurmal function.
// function created after call the function.
console.log(addone(5));
function addone(num) {
    return num + 1
}


// expression function.
//  function create after not call the function becuse the function name is expression function.
const addtwo = function (num = 5) {
    return num + 2
}
// function call for create before.
console.log(addtwo(3));

