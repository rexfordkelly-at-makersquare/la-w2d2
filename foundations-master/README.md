# Foundations Sprint

In this sprint, you're going to practice your fundamentals by exploring how common JavaScript methods are actually just _abstractions_ built on basic syntax. You'll re-implement these methods yourself using nothing but loops, conditionals, operators, and occasionally the `arguments` object, but entirely without _any_ functions you haven't written yourself. **No native methods allowed!**.

## How To Use This Sprint

- Review the instructions below
- "Fork" this "repo" and download a zip of the files
- Complete sections 1-3: Math, Arrays, and Strings
- Upload your solutions back to your fork on GitHub
- If necessary, review <a href="https://docs.google.com/presentation/d/1MONU2Mkfujnd9bQLx_Q38AcUAxKJ5449tP0T3hERm_c" target="_blank">these instructions</a> on forking, downloading and uploading using GitHub's GUI (no command line or extra software required!)

Once you've downloaded a copy of the code, use your text editor of choice to complete the stub functions in the four numbered files (the fourth being extra credit). Each section covers a different group of useful methods, and when you're done, each should work identically to its native equivalent (unless otherwise noted).

To assist you, there is a suite of Mocha/Chai tests that you can use to track your progress. Don't worry too much about how they work for now, but you can run the tests simply by opening `TestRunner.html` in your browser. You will see which functions are failing, including the tests they failed. But beware relying too much on this tool! There may be some edge cases the tests miss, and you should strive to be able to tell whether or not your code is working without them.

## The Methods
If you have any questions about how one of these functions should work, remember that the native methods they are replicating are very well documented online! It might be worthwhile to look up the [MDN page](https://developer.mozilla.org/) for anything you aren't familiar with.

### Part 01: The Math Object
This section should make for a fairly straight-forward start, covering various handy `Math` methods:
- [Math.abs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
- [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

### Part 02: Array Methods
Next you will implement some of the powerful methods that makes arrays so useful:
- [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

### Part 03: String Methods
Finally, things will get a little more complicated as you tackle some String methods (plus a bonus object method):
- [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) _(works on arrays **and** strings)_
- [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
- [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

### Part 04: Extra Credit
If you're feeling adventurous there a few extra methods for you to tackle:
- [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) _(not to be confused with slice!)_
- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
- [Date.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) _(masochists only)_

### Other Useful Methods
You won't have to implement them, but here are more common methods that might be worth knowing for future projects:
- [Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) _(explicit version of bracket notation for strings)_
- [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) _(works for arrays **and** strings)_
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) _(these three are actually operators, but very useful)_
- [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) 
