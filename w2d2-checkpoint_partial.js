# W2D2 Checkpoint

Submit a link to your gist [here](https://goo.gl/forms/HywFjkNIU9mLM7c03)

1. Write a function `average` that takes two numbers as input (parameters), and
   returns the average of those numbers.

   function average(x,y) {
    return (x+y) / 2;
   }
   

2. Write a function `greeter` that takes a name as an argument and *greets*
    that name by returning something along the lines of `"Hello, <name>!"`

function greeter(name) {
  return "Hello, " + name + "!";
}



3. Write the following functions that each accept a single number as an
   argument:

    + `even`: returns `true` if its argument is even, and `false` otherwise.
    + `odd`: the opposite of the above.
    + `positive`: returns `true` if its argument is positive, and `false` otherwise.
    + `negative`: the opposite of the above.



function even(x) {
  if(x % 2 === 0) {
  return "true";
  }
  return "false"
}




4. Write a function `sayHello` that takes a *language* parameter, and returns
   "hello" in that language. Make the function work with **at least three
   languages**.



function sayHello(lang) {
  if(lang === "english") {
    return "hello!";
  }
  if(lang === "spanish") {
    return "hola!";
  }
  if(lang === "french") {
    return "bonjour!";
  }
  return "That aint' no language.";
}





5. Write a function `validCredentials` that accepts two parameters: *username*
   and *password*, and returns `true` if **both** are long enough, and `false`
   otherwise. You can decide what constitutes "long enough".


function validCredentials(username,password) {
  if(username.length >= 6 && password.length >= 6) {
    return "true";
  }
  return "false";
}





6. **Repeating a String `n` Times:** Let's write a function called
   `repeatString` that takes two parameters: a string `str`, which is the string
   to be repeated, and `count` -- a number representing how many times the
   string `str` should be repeated, *e.g.*

   ```js
   function repeatString(str, count) {
     // TODO: your code here
   }
   repeatString('dog', 0); // => ''
   repeatString('dog', 1); // => 'dog'
   repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
   repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
   ```

function repeatString(str,count) {
  return str.repeat(count);
}




7. Write a function called `average` that takes an array of numbers as a
   parameter and returns the *average* of those numbers.



//I know how to do this! But my brain's not working at the moment. None of the below functions work. I need to review arrays/objects.

function average() { // ok, so this works, but line 114 is a little odd, why not move that expression out of the loop?
var arr = Array.from(arguments)
for(i=0; i<=arr.length; i++) {
  arr += arr[i];
 var solve = arr/arr.length;
}
return solve
}


function average() {
var arr = Array.from(arguments)
var solve = 0;
for(i=0; i<=arr.length; i++) {
  solve += arr[i];
  solve1 = arr/arr.length; // again, this is a little odd, it works but could it not be done out of the loop?
}
return solve1
}


function average(array) {
var arr = 1;
for(i=0; i<=array.length; i++) {
arr += array.i;
}
return arr
}



function average(array) {
 array = []
 result = 0;
 for(i=0; i<=array.length; i++) {
  result += result + array[i];
 }
 return result 
}


8. Write a function `countWords` that, when given a string as an argument,
   returns an *object* where *keys* are the words in the string, and *values*
   are the number of occurrences of that word within the string:







   ```js
   function countWords(s) {
   // ...
   }
   countWords("hello hello"); // => {"hello": 2}
   countWords("Hello hello"); // => {"Hello": 1, "hello": 1}
   countWords("The quick brown"); // => {"The": 1, "quick": 1, "brown": 1}
   ```

   **HINT:** You will want to make use of the string method `split`. Try
   `\"Hello hello".split(" ")` at a console to see how it works.

   - Modify `countWords` to be *case insensitive* by using the following string
     method (experiment at a console with it to learn its behavior):

   ```js
   "HElLo".toLowerCase(); // => ???
   ```
   




### Bonus

1. Read about the join method on MDN and use it to implement a function that accepts a string
   as an argument and returns that string reversed.

2. The function `Object.keys` returns an array of an object's *keys*. Experiment
   with it at the console like this:

   ```js
   Object.keys({a: 1, b: 2});
   ```

   Using this property, write versions of the above functions using repetition
   through function invocation (*i.e.* recursion)

