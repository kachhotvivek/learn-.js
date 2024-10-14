
// date data type is object.
let date = new Date()
console.log(date.toLocaleString('en-IN', { timeZone: 'UTC' }));

// toString key word are use to today day find and which coutry date this is difend.
console.log(date.toString());

// toDateString key word is use to find today date and day name.
console.log(date.toDateString());

// toISOString key word is use to find by defaulte server time print.
console.log(date.toISOString());

// toJSON method of date instances returns a string representing this date in the same ISO format.
console.log(date.toJSON());

// create for fix date for date method under find the date. 
// js month are strat in 0. 
let mydate = new Date(2023, 0, 12)
console.log(mydate.toDateString());

// 
let myTimeStmp = Date.now()
console.log(Date.now());

// // decimal number to convert in normul number
console.log(Math.floor(Date.now()));

// 
let newDate = new Date()

// find the date 
console.log(newDate);

// find the Date,month and year 
console.log(newDate.getDate() + "-" + Math.floor(newDate.getMonth()+1) +"-"+ newDate.getFullYear());

// find the month 
console.log(newDate.getMonth()+1);

// find the year
console.log(newDate.getFullYear());

// find the hours,minutes and seconds print
console.log("today time",newDate.getHours() +":"+ newDate.getMinutes() + ":"+ newDate.getSeconds());


// formant for use to localestring is customization for weekday name long anything.
//  localestring is customization for many proparty defind.
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month : "long",
    year : "numeric",
    day : "2-digit"
}));
