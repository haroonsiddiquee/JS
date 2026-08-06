// ------------------------------------------------------------
// 13. SWITCH STATEMENT
// ------------------------------------------------------------
// const value = 3;
// switch (value) {
//   case 3:
//     console.log("three is cool");
//     break; -- IMPORTANT — without break, code "falls through" to next case
//   case 4:
//     console.log("four is not cool");
//     break;
//   default:
//     console.log("okay"); -- runs if no case matches
// }
// FALL-THROUGH BUG: if you forget `break`, execution continues
// into the NEXT case (and next, and next...) even if it doesn't match.
// This is usually a mistake, so always remember your break keyword.

const value = 5

switch (value) {
  case 3:
    console.log("3 is GOOD")
    break;
  case 4:
    console.log("four isn't GOOD")
    break;
  default:
    console.log("Just OK!")
    break;
}