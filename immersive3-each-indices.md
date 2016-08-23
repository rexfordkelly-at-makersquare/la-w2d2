# Improved `each`: Passing Element Indices

## Lesson

[Improving Each (indices)](https://docs.google.com/presentation/d/1ooNPlndMft8pn5aSV0NBHcVQWBz1HtgQUugv-CKCNcY/embed?start=false&loop=false&delayms=3000)

## Exercises

```js
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
```

### Basic Requirements

1. Using our new version of each, write a function called `indexedExponentials`
   that, when given an array of numbers as an argument, returns a *new* array of
   numbers where each number has been raised to the power of its index, *e.g.*:

   ```js
   function indexedExponentials(numbers) {
     // TODO: your code here
   }
   indexedExponentials([2, 5, 7, 4]); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]
   ```

2. Write a function called `evenIndexedOddNumbers` that, when given an array of
   numbers as an argument, returns an array of only the *odd* numbers with *even*
   indices.

   ```js
   function evenIndexedOddNumbers(numbers) {
     // TODO: Your code here
   }
   evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]); // => [1, 3, 7]
   ```

3. Write a function called `evenIndexedEvenLengths` (yeah, a bit of a mouthful)
   that accepts an array of strings as a parameter, and returns only the strings
   that are found at an even index that *also* have an even length, *e.g.*:

   ```js
   function evenIndexedEvenLengths(strings) {
     // TODO: your code here
   }
   evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
   // => ["lion", "doge"]
   evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
   // => ["purple", "yellow"]
   ```