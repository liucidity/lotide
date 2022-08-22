//Function implementation
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅✅✅ Assertion Passed: [${actual}] === [${expected}]` :
    `🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

module.exports = {assertEqual:assertEqual};

// //Test Code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);

// //Comparing identical strings
// assertEqual('Travis', 'Travis');
// //Comparing non-identical strings
// assertEqual('iuewahfjkda','aufheuiwahfiukd');
// //Comparing identical numbers
// assertEqual(22,22);
// //Comparing non-identical numbers
// assertEqual(28,32);