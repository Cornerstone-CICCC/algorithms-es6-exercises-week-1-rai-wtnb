/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(myString, myFuncResult) {
  console.log("I am " + myString + ", " + myFuncResult);
}

emotions(
  "happy",
  (function (count) {
    let sound = "";
    for (let i = 0; i < count; i++) {
      sound += "ha";
    }
    return sound + "!";
  })(2)
);
