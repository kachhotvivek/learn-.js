// comparition 

// The reason is that an equality check == and comparions > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.
// that's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);