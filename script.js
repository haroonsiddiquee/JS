// ------------------------------------------------------------
// 11. LOGICAL OPERATORS
// ------------------------------------------------------------
// &&  AND     ||  OR      !  NOT
//
// With actual booleans, behaves normally:
//console.log(true && false);  false
//console.log(true || false);  true
//console.log(!true);          false
//
// With NON-boolean values, JS returns one of the ORIGINAL VALUES
// (not true/false) based on "truthy"/"falsy" rules:
//console.log("hello" || true);    "hello" (truthy value picked first for ||)
//console.log("" || true);         true ("" is falsy, so moves to next)
//console.log(true && "hello");    "hello" (if left is truthy, returns right side)
//console.log(false && "hello");   false (left is falsy, short-circuits)
//
// Convert anything to explicit boolean:
//Boolean("hello");  true
//Boolean("");       false
//Boolean(0);        false
//Boolean(2);        true

console.log(true && false)
console.log(false && true)
console.log(true || false)
console.log(false || true)
console.log(!true)
console.log(!false)
console.log(!(true && false))
console.log(!(true || false))
console.log(!(!(true) || false))
console.log(!(!(true) || !(false)))
console.log(!(true || !(false)))


console.log("hello" || true)
console.log("hello" || false)
console.log("" || true)
console.log("" || "hello")
console.log("hello" && true)
console.log("hello" && false)
console.log(!false && "hello")
console.log("hello" && !false)
console.log(!true && "hello")
console.log("hello" && !true)
console.log("" && "hello")
console.log(Boolean(90) && Boolean("hello"))