// ------------------------------------------------------------
// 8. ARITHMETIC OPERATORS & TYPE COERCION
// ------------------------------------------------------------
// Standard operators: +  -  *  /  **(exponent)  %(modulus)  ++  --
// Shorthand: += -= *= /= %=
//
// TYPE COERCION: JS automatically converts types when mixing them
// in an operation. This is one of JS's "weird" behaviors.
 
// console.log(6 + "7");  -----------  "67"  -> number converted to string, then concatenated
// console.log("7" + 6);  -----------  "76"  -> same idea, order matters for the output string
// console.log(6 + true);  ----------  7     -> true acts like 1
// console.log(6 + false);  ---------  6     -> false acts like 0
// console.log("hello" + false);  ---  "hellofalse"
 
// With operators OTHER than + (like * / -), JS tries to CONVERT
// strings to numbers instead of concatenating:
// console.log("123" * 2);  ---------  246
// console.log("123" / 2);  ---------  61.5
// console.log("hello" - 2);  -------  NaN ("Not a Number" - conversion failed)

const x = 5
const y = "9"
console.log(x+y)
const z = true
console.log(x+z)
const a = false
console.log(x+a)
const b = "Hello "
console.log(b+z)
console.log(y-x)
console.log(y-z)
console.log(y-b)
console.log(x*y)
console.log(x*z)
console.log(x*a)
console.log(x*b)
console.log(z*a)
console.log(y/x)
console.log(y/z)
console.log(y/a)
console.log(y/b)
console.log(z/a)