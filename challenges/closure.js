// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */// 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//Hoisting allows the function to grab the variable that is inside the main scope of myfunction due to scope. the nexted function can not reach outside its scope and the through hoisting nested //can reach internal but not external. Function scope also helps bind the variable inside the function and a nested function will look for what is inside its scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num1){
  let total = 0;
  for(let i = 0; i <= num1; i++){
    total += i;
  }
  return total;
}
console.log(summation(4));


// Line 32 has a breakpoint with a red dot. Not sure what that is or means. Code does work correctly.