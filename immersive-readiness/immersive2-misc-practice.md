# Misc Practice

## Instructions

1. In your starter project, open the files in the `w3d2` directory. 
2. Find a partner (preferably one that you have not yet worked with), and work
   through the following exercises as a pair.

## Exercises

1. Refactor the uses of `for` loops in the below functions to use `each`
   instead:

   ```js
   var people = [
     {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
     {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
     {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
     {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
     {name: {first: "Louis", last: "Reasoner"}, age: 21}
   ];

   function ages(people) {
     var acc = [];
     for (var i = 0; i < people.length; i++) {
       acc.push(people[i].age);
     }
     return acc;
   }

   function firstNames(people) {
     var acc = [];
     for (var i = 0; i < people.length; i++) {
       acc.push(people[i].name.first);
     }
     return acc;
   }

   function lastNames(people) {
     var acc = [];
     for (var i = 0; i < people.length; i++) {
       acc.push(people[i].name.last);
     }
     return acc;
   }

   ages(people); // => [26, 34, 40, 45, 21]
   firstNames(people); // => ["Alyssa", "Ben", "Eva", "Lem", "Louis"]
   lastNames(people); // => ["Hacker", "Bitdiddle", "Ator", "Tweakit", "Reasoner"]
   ```

2. Write a function called `fullNames` that makes use of `each` to output an
   array of full names (*e.g.* "Ben Bitdiddle") when given `people` as an
   argument. **HINT:** This function will look very similar to `firstNames` and
   `lastNames` from above.

3. Using the function `ages` from above and `each`, complete the function called
   `averageAge` below that should compute the average age of an array of people.

   ```js
   function averageAge(people) {
     // YOUR CODE HERE
   }
   ```