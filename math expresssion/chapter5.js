// CHAPTER 5

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let num1 = 3 ;
// let num2 = 5 ;

// document.write("sum of 3 & 5 is \n" , num1 + num2)

// output ..............

// sum of 3 & 5 is 8




// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.



// 5. Write a script to display multiplication table of any
// number in your browser. E.g


let input = prompt("which tables you want to generate")
for (let i = 1; i <= 10 ; i++){
    let multi = input*i
    document.write(i + "x" + i + "=" + multi + "<br>");
    
}

