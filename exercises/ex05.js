/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/
const width = 23; // size L (large)
const length = 30; // size L (large)
const sleeve = 8.71; // size L (large)

if (
  width >= 18 &&
  width < 20 &&
  length >= 28 &&
  length < 29 &&
  sleeve >= 8.13 &&
  sleeve < 8.38
) {
  console.log("S");
} else if (
  width >= 20 &&
  width < 22 &&
  length >= 29 &&
  length < 30 &&
  sleeve >= 8.38 &&
  sleeve < 8.63
) {
  console.log("M");
} else if (
  width >= 22 &&
  width < 24 &&
  length >= 30 &&
  length < 31 &&
  sleeve >= 8.63 &&
  sleeve < 8.88
) {
  console.log("L");
} else if (
  width >= 24 &&
  width < 26 &&
  length >= 31 &&
  length < 33 &&
  sleeve >= 8.88 &&
  sleeve < 9.63
) {
  console.log("XL");
} else if (
  width >= 26 &&
  width < 28 &&
  length >= 33 &&
  length < 34 &&
  sleeve >= 9.63 &&
  sleeve < 10.13
) {
  console.log("2XL");
} else if (width >= 28 && length >= 34 && sleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("N/A");
}
