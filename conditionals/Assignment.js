//1 Write a program that grades student based on their marks.
// If greater than 90 then A Grade
// If between 70 and 90 then a B grade
// If between 50 and 70 then a C grade
// Below 50 then an F grade

/* function gradeStudent(marks){
    if (marks > 90){
        return 'A Grade';
    }else if (marks >= 70 && marks <= 90){
        return 'B Grade';
    }else if (marks >= 50 && marks < 70){
        return 'C Grade';
    }else{
        return 'F Grade';
    }
}

let marks = 75; 

let result = gradeStudent(marks);
console.log(`The student receives ${result}`);
*/

// 2 Generate numbers between any 2 given numbers.
// Ex:
//  const num1 = 10;
//  const num2 = 25;
// Output: 11, 12, 13, ...., 25

// function generateNumbersBetween(num1, num2){
//     if(num1 > num2){
//         console.log("Invalid input: num1 should be less than or equal to num2.");
//         return;
//     }
//     for(let i = num1 + 1; i <= num2; i++){
//         console.log(i);
//     }
// }

//3 const num1 = 10;
// const num2 = 25;
// console.log(generateNumbersBetween(num1, num2));

//  Use the while loop to print numbers from 1 to 25 in ascending and descending order.

// Ascending Order
// let ascendingCounter = 1;
// console.log("Ascending Order:");
// while(ascendingCounter <= 25){
//     console.log(ascendingCounter);
//     ascendingCounter++;
// }


// Descending Order
let descendingCounter = 25;
console.log("Descending Order:");
while(descendingCounter >= 1){
    console.log(descendingCounter);
    descendingCounter--;
}