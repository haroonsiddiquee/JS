// ------------------------------------------------------------
// 14. ARRAYS
// ------------------------------------------------------------
// const arr = [];                   ----- empty array
// const arr2 = [1, 2, 3, true];     ----- mixed types allowed
// const arr3 = new Array(5);        ----- creates array with 5 empty slots
// const arr4 = Array.from("Hello"); ----- ['H','e','l','l','o']
 
// Access / modify:
// arr2[0] = "y";                    ----- change element at index 0
// arr2[arr2.length - 1];            ----- last element (zero-indexed, hence -1)
// arr2[10] = "test";                ----- assigning beyond current length auto-creates
//                                   ----- all the "empty" slots in between
 
// Common array methods:
// arr2.push(4);                     ----- add to end
// arr2.pop();                       ----- remove & return last element
// arr2.shift();                     ----- remove & return FIRST element
// arr2.unshift("new");              ----- add to the START
// arr2.indexOf("o");                ----- first occurrence index
// arr2.lastIndexOf("o");            ----- last occurrence index
// arr2.includes("o");               ----- true/false if value exists
// arr2.concat(arr3);                ----- merge two arrays into a NEW array
// arr2.join("|");                   ----- turn array into a string, joined by delimiter
// arr2.slice(1, 3);                 ----- copy a portion (start inclusive, end exclusive)
// arr2.splice(1, 1);                ----- remove elements: (startIndex, deleteCount)

const arr = [1, 2, 3, true]
console.log(arr)

const arr2 = new Array(5)
console.log(arr2)

const arr3 = new Array(5)
console.log(arr3[2])

const arr4 = Array.from("hello")
console.log(arr4)

const arr5 = Array.from("hello")
arr5[1] = "o"
arr5[4] = "a"
console.log(arr5)

const arr6 = Array.from("hello")
console.log(arr6[arr6.length - 4])

const arr7 = Array.from("hello")
console.log(arr7[arr7.length])

const arr8 = Array.from("hello")
arr8[arr8.length + 3] = "testing"
console.log(arr8)

const arr9 = Array.from("hello")
arr9.push("16")
console.log(arr9)

const arr10 = Array.from("hello")
arr10.pop()
console.log(arr10)

const arr11 = Array.from("hello")
arr11.shift()
console.log(arr11)

const arr12 = Array.from("hello")
arr12.unshift("wow")
console.log(arr12)

const arr13 = Array.from("hello")
console.log(arr13.indexOf("l"))

const arr14 = Array.from("hello")
console.log(arr14.lastIndexOf("l"))

const arr15 = Array.from("hello")
console.log(arr15.includes("f"))

const arr16 = Array.from("hello17")
const arr17 = arr.concat(arr16)
console.log(arr17)

const str = arr.join(" | ")
console.log(str)

const arr18 = arr.slice(1, 3)
console.log(arr18)

const arr19 = arr.splice(1, 1)
console.log(arr19)
console.log(arr)