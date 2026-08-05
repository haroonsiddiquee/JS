// ------------------------------------------------------------
// 9. TYPE CONVERSION (explicit / manual)
// ------------------------------------------------------------
// String -> Number:
// Number("2345.8");    2345.8
// parseInt("2345px");  2345  (grabs only the integer part, ignores "px")
// parseFloat("23.4");  23.4  (keeps decimal)
// Number(true);         1
// Number(false);         0
 
// Number -> String:
// String(6);          "6"
// (6).toString();     "6"
// 6 + "";             "6"  (adding empty string forces string conversion)

const a = 67
const b = "2345"
const c = "123.5"
const d = "365px"
const e = "365.6px"
const f = true
const g = false

console.log(a+b)
console.log(Number(b)+a)
console.log(Number(c)+a)
console.log(parseInt(d)+a)
console.log(parseFloat(e)+a)
console.log(Number(f)+a)
console.log(Number(g)+a)
console.log(String(a)+b)
console.log(a+"Hello")
console.log(a.toString())