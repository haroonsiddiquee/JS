//                                                        Variables

//var is function scoped. 
// This means it can be redeclared and reassigned.

//let are block scoped. 
// This means it can be redeclared but can't be reassigned.

//const are also block scoped.
//// This means it can't be redeclared and reassigned.

var x=55
console.log(x)
x=33                    //This is redeclaration which doesn't returns an error.
console.log(x)
var x=21                //This is reassigning which doesn't returns an error.
console.log(x)

let y=64
console.log(y)
y=25                    //This is redeclaration which doesn't returns an error.
console.log(y)
// let y=12             //This is reassigning which returns an error.
// console.log(y)

const z=8
console.log(z)
// z=5                  //This is redeclaration which returns an error.
// console.log(z)
// const z=88            //This is reassigning which returns an error.
// console.log(z)