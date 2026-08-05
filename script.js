// ------------------------------------------------------------
// 10. COMPARISON OPERATORS
// ------------------------------------------------------------
// ==   loose equality   -> converts types before comparing (avoid this!)
// ===  strict equality  -> checks value AND type (PREFERRED, always use this)
// !=   loose not-equal
// !==  strict not-equal (PREFERRED)
// <  >  <=  >=
 
// Loose equality (==) gives weird/unexpected results:
// console.log(1 == 1);            true
// console.log(true == 1);         true
// console.log(null == undefined); true  (special case, they're loosely equal)
// console.log(null == false);     false (surprising!)
// console.log(undefined == false);false
// console.log(null == true);     false (surprising! Because null & undefined are not loosely equivalent )
// console.log(undefined == true);false (to true or false. Meaning there domain is different.)
// console.log("" == 0);           true
 
// Strict equality (===) avoids all this weirdness:
// console.log(undefined === null); false (different types)
// console.log(1 === 1);             true
// console.log(1 !== 1);             false
 
// RULE OF THUMB: Always use === and !==, avoid == and != unless
// you specifically know why you need loose comparison.

console.log("1" == 1)
console.log(undefined == null)
console.log("1,2" == [1, 2])
console.log("1" != 1)
console.log("1,2" != 12)
console.log(undefined === null)
console.log(undefined !== null)
console.log(undefined === "")
console.log(undefined !== "")
console.log("1" === 1)
console.log("1" !== 1)
console.log("1" > 1)
console.log("2" > 1)
console.log("2" >= 1)
console.log("1" >= 1)
console.log("1" < 1)
console.log("1" < 3)
console.log("1" <= 3)
console.log("1" <= 1)