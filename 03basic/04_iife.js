// Immediately Invoked Function Expressions (IIFE)
// global scope ke palution se problme hoti jise hata ne ke liye IIFE ka use kiya. 

// named IIFE
(function chai() {
    console.log(`DB Connected`);
    
}) ();
// semicolen use for IIFE code end.

//  Arrow function in IIFE
// simple IIFE
( (name) => {
    console.log(`hello ${name}`);
    
}) ("vivek")
