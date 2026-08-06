// ------------------------------------------------------------
// 12. CONDITIONALS: if / else if / else
// ------------------------------------------------------------
// if (true) {
//   console.log("Hello World");
// } else if (false) {
//   console.log("do something");
// } else {
//   console.log("run");
// }
 
// If there's only ONE statement to run, braces {} are optional:
// if (true) console.log("no braces needed for single line");
 
// WARNING: without braces, ONLY the next single line belongs to
// the if/else — adding a second line makes it run unconditionally!
 
// Ternary operator (inline if/else, one-liner):
// const condition = 2 < 3 ? "okay cool" : "no";
// console.log(condition);
// syntax: (test) ? valueIfTrue : valueIfFalse

if(false)
    console.log("Hello World")
// else if(true)
//     console.log("run")
else{
    console.log("cigarettes")
    console.log("after")
    console.log("everything")
}

const cond = 2<3 ? "yes" : "no"
console.log(cond)

const condi = 3<2 ? "yes" : "no"
console.log(condi)