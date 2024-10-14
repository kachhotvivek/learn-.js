// number and math

// nurmal declearetion
const num = 400
console.log(num);

// special declearetion
const balance = new Number(100)
console.log(balance);

// convert to number to string
console.log(balance.toString().length);

// float value find and fix number in display
console.log(balance.toFixed(2));

// toPrecision this is use to fix number in show in output
const othernumber = 123.9098
console.log(othernumber.toPrecision(4));

// number convert in nurmal number to indian convertion
// number comaj include and by defualt american numbers 
// find the indain number find for use to toLocaleString('en-IN')
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// maths
// maths is laibrary

// maths abs is use to nagative vallue conveert to positive value
console.log(Math.abs(-10));

// round is use to decimal number conver to nurmal number
console.log(Math.round(89.97));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

// min use to smallest value display 
console.log(Math.min(4, 4, 6, 8, 9));

// max use to highest value display
console.log(Math.max(4, 2, 6, 8, 4));

// random is dispaly in 0 to 1 beetwin value find
console.log(Math.random());

// 
console.log((Math.random() * 10 ) +1 );

// 
console.log(Math.floor(Math.random() * 10) + 10);

//
const min = 10;
const max = 30;

//
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





