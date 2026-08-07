// ------------------------------------------------------------
// 15. ARRAY DESTRUCTURING & SPREAD OPERATOR
// ------------------------------------------------------------
// Destructuring — unpack array values into separate variables:

// const [x1, y1] = [1, 2];
// console.log(x1, y1);                        ----- 1 2
 
// With rest (...) to gather remaining elements:
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first, rest);                   ----- 1 [2, 3, 4]
 
// Spread operator (...) — copies elements WITHOUT sharing reference:
// const original = [1, 2, 3];
// const copy = [...original];                 ----- true independent copy
// const combined = [1, 2, ...original];       ----- merge into new array
// Without spread, `const copy2 = original;` just copies the REFERENCE —
// changing copy2 would also change original (they'd point to same array)

const [x, y, ...z] = [1, 2, 3, 4]
console.log(x, y, z)

const a = [1, 2, 3, 4]
const b = [...a, 5, 6, 7, 8]

b.push("hello")
console.log(a, b)