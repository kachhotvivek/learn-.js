const user = {
    username : "vivek",
    price : 999,

    welcomeMessage : function () {
        //  this is curennt context.
        console.log(`${this.username} welcome to website`);
        // variable under use for this for output is every variable and function show.
        console.log(this);
        
    }

}

// console.log();
// user.welcomeMessage();

// only use for this declare in console log for output is empty.
// console.log(this);


function chai() {
    // function uder use to this kwy word and output is object and global from.
    console.log(this);
    
}
// chai();

// basic arrow function 
const addtwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addtwo(3,4));

// emplicite return
const addh = (num1, num2) => num1+num2

console.log(addh(5,6));





// ++++++++++++++++++++++ NOTE +++++++++++
// -> The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined.
// -> this keyword are only use to object.
// -> function under not use to this keyword.
// -> carlibrecat use to return keyword used.
// -> paranthecis use to not find the return keyword.