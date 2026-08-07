// ------------------------------------------------------------
// 17. FOR LOOPS
// ------------------------------------------------------------
// Classic for loop:
// for (let k = 0; k < 10; k++) {
//   console.log(k);
// }
// Structure: (initialization; condition; increment)
 
// for...of  -> loops over VALUES of an iterable (array, string, etc.)
// for (const val of [4, 5, 6]) {
//   console.log(val);
// }
 
// for...in  -> loops over KEYS/indices — mainly used for OBJECTS
// (using `in` on arrays can give unexpected results, prefer `of` for arrays)
// for (const key in { a: 1, b: 2 }) {
//   console.log(key);         ---------- "a", "b"
// }
 
// Getting both index AND value from an array:
// for (const [idx, val] of [10, 20, 30].entries()) {
//   console.log(idx, val);
// }

for(let i = 20; i > 10; i--){
    console.log(i)
    continue
}

const arr = [1, 2, 3, 4]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

const str = "hello"

for(let value of str){
    console.log(value)
}

const arr2 = [ 1, 2, 3, 4]

for(let [ i, value] of arr2.entries()){
    console.log( i, value)
}