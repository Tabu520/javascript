// function countFrom(a, b) {
//     return new Promise(function(resolve, reject) {
//         var intervalId = setInterval(function() {
//             console.log(a);
//             ++a;
//             if (a > b) {
//                 clearInterval(intervalId);
//                 resolve();
//             }
//         }, 500);
//     });
// }

// countFrom(1, 10).then(function() {
//     console.log('Done');
// });

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// console.log(result);

let quoteSample = "The fiiiiive boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2);
console.log(result);