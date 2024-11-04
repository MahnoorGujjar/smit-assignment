// QUESTION 1


// let a = 10 ;

//  ++a 
//  a++
//  --a
//  a--
//  console.log(a);
 

//..........................................................................................


// QUESTION 2

// what will be the output in variables a , b & result after execution of the following script 

// var a = 2 , b = 1 ;
// var result = --a  -  --b  +  ++b  +  b--
// explain the output at each stage 


// let a = 2 
// let b = 1

// let result = --a -  --b  +  ++b  +  b--
//  --a
//  --b
//  ++b
//  b--  

// console.log("a is " ,a);
// console.log("b is " ,b);

// console.log("result is", result);


//..........................................................................................

// QUESTION 3

// write a program that takes input a name from user & greet the user n...

// let user = prompt("do write your name please!")

// alert(`Hello! , ${user} nice to meet you `)


//...............................................................................................



// QUESTION 4 

// write a program to take input a number from user & display its multiplication table on your browsser . If user does not enter a nuw number multiplication table of 5 should be displayed 


// let userInput = prompt("write a number whih you want to generate a table")

// for (let i = 1 ; i <= 10 ; i++){
//     let result1 = userInput*i
//     console.log(i + "x" + i + "=" + result1);
    
// }


//...................................................................................................



// QUESTION 5


// A ... take three subjects name from user and store them in 3 different variables
// B ... total marks for each subject name rom user and store them in 3 different variables.
// C ... take obtained marks for the first ssubject from user and stored it in different variables.
// D ... take obtained marks for  remaining 2 subjects from user and store them in variable.
// E ... now calculate total marks and percentage and show the result in browser like this 

// A: Take subject names
alert("name the 3 subjects which you want to know your marks")

let sub1 =parseInt(prompt["name the first subject"]);
let sub2 =parseInt(prompt["name the second subject"]);
let sub3 =parseInt(prompt["name the third subject"]);




// B: Total marks for each subject
let totalMarks = parseInt(prompt(`\t \t \t \t \t \t Enter total marks for subjects:`));
console.log("SUBJECTS TOTAL MARKS MsrkOBT PERCENTAGE");


let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${sub1}:`));
let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${sub2}:`));
let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${sub3}:`));


console.log(sub1 , "       " +totalMarks  , "      ", obtainedMarks1 , "     "     );
console.log(sub2 , "       " +totalMarks   , "      ", obtainedMarks2 , "     "     );
console.log(sub3 , "       " + totalMarks  , "      ", obtainedMarks3 , "     "     );


let sum = totalMarks*3

let totalObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

let totalperc = totalObtained/ sum*100 

console.log("      " +sum +"     " + totalObtained + "     "+  totalperc+"%");




// // C: Obtained marks for the subjects
// let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${sub1}:`));
// let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${sub2}:`));
// let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${sub3}:`));

// // E: Calculate total marks and percentage
// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let totalMaxMarks = totalMarks1 + totalMarks2 + totalMarks3;
// let percentage = (totalObtainedMarks / totalMaxMarks) * 100;

// // Display result
// alert(`Results:\nTotal Obtained Marks: ${totalObtainedMarks} / ${totalMaxMarks}\nPercentage: ${percentage.toFixed(2)}%`);
