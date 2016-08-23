# Improved `each`: Iterating Over Objects

## Lesson

[Improving Each (objects)](https://docs.google.com/presentation/d/1IfC_KHc2kZNUeHcTMJPhfGGs6kgI4vMOA53EVwDPEFY/embed?start=false&loop=false&delayms=3000)

## Exercises

```js
function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}
```

### Basic Requirements

1. Using our updated version of `each`, write the following functions:

   + `values`: accepts an object as a parameter, and outputs an array of the
     object's *values*.
   + `keys`: accepts an object as a parameter, and outputs an array of the
     object's *keys*.

2. Write a function called `keysLongerThan` that accepts two parameters -- an
   *object* and a *number* -- and returns a new object with only the key/value
   pairs in the input object whose keys are longer than the numeric argument,
   *e.g.*:

   ```js
   keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
   // => {name: "Annyeong", favoriteColor: "blue"}
   keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4);
   // => {favoriteColor: "blue"}
   ```

   Make sure to use the new version of `each` for this.

3. Write a function called `incrementValues` that accepts an object as a
   parameter, and outputs an object with all of its numeric values incremented
   by one. You'll want to use the updated version of `each` for this, and you
   will need to check the type of each value to determine whether or not it
   should be incremented.

   **HINT:** Try entering the following expressions in to your console:

   ```js
   typeof "hello"; // => "string"
   typeof 1; // => "number"
   typeof true; // => "boolean"
   ```