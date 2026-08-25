# **ECMAScript 6+**

I recently finished an **ECMAScript** course on the Platzi platform. It was a long and somewhat difficult course, so I want to share a summary.

The idea is that we can review it to refresh our memories or refresh our understanding. I'll try to add images, links, and the code to make it easy to read.

---

### Table of Contents

- [**What is ECMAScript?**](#what-is-ecmascript)
- [**ES6**](#es6-2015)

- [Default Params](#es6-default-params)

- [Template Literal (Concatenation)](#es6-template-literal-concatenation)

- [ES6 Multiline](#es6-multiline)

- [Destructuring Elements](#es6-destructuring-elements)

- [Spread Operator](#es6-spread-operator-propagation-operator)

- [Let](#es6-let)

- [Const](#es6-const)

- [Arrow Functions: =>](#es6-arrow-functions-)

- [Promises](#es6-promises)

- [Classes](#es6-classes)
- [Modules(import and export)](#es6-import-and-export modules)
- [Generators](#es6-generators)
- [**ES7**](#es7-2016)
- [Includes](#es7-includes)
- [Exponential](#es7-exponential)
- [**ES8**](#es8-2017)
- [Object.entries()](#es8-objectentries)
- [Object.values(),Object.keys()](#es8-objectvaluesobjectkeys)
- [Padding (padStart, padEnd)](#es8-padding-padstart-padend)
- [Trailing Commas](#es8-trailing-commas)
- [Async Await](#es8-async-await)
- [ES9](#es9-2018)

- [Spread on rest objects](#es9-spread-on-rest-objects)

- [ReGex or Regular Expression](#es9-regex-or-regular-expression)

- [ES10](#es10-2019)

- [Array.prototype.flat(depth_level)](#es10-arrayprototypeflatdepth_level)

- [Array.prototype.flatMap(depth_level)](#es10-arrayprototypeflatmapdepth_level)

- [String.prototype.trimStart() | String.prototype.trimEnd()](#es10-stringprototypetrimstart--stringprototypetrimend)
- [Object.fromEntries()](#es10-objectfromries)
- [**ES11**](#es11-2020)
- [Dinamic Import](#es11-dinamic-import)
- [Big Int](#es11-big-int)
- [Promise.allSettled()](#es11-promiseallsettled)
- [globalThis](#es11-globalthis)
- [Nullish coalescing operator ??](#es11-nullish-coalescing-operator-)
- [Bang bang operator!!](#es11-bang-bang-operator-)
- [Optional chaining ?](#es11-optional-chaining-)
- [**ES12**](#es12-2021)
- [replaceAll()](#es12-replaceall)
- [Private methods](#es12-private-methods)
- [Promise.any()](#es12-promiseany)
- [WeakRef()](#es12-weakref)
- [Logical AND assignment &&=](#es12-logical-and-assignment-)
- [logical OR assignment ||=](#es12-logical-or-assignment-)
- [logical nullish assignment ??=](#es12-logical-nullish-assignment-)
- [**TC39**](#tc39)

---

## What is ECMAScript?

ECMA International's proposed language specification

- 1996 Netscape, JS proposal
- July 2015, new version of JS

##### According to Wikipedia:

> ECMAScript is a programming language specification published by ECMA International. Development began in 1996 and was based on the popular JavaScript language proposed as a standard by Netscape Communications Corporation. It is currently accepted as the ISO/IEC 22275:2018 standard.

### **ES6 2015**

### ES6 Default Params

We set default parameters in case nothing is received.

``js
function conDefaultParams(name = 'Antonio', age = '23', gender = 'M') {
console.log(name, age, gender);

}
conDefaultParams();

// Output: Antonio 23 M //;

/Prints the default parameters we assign/;

``

### ES6 Template literal (Concatenation)

This allows us to create more user-friendly joins; a more intuitive way to concatenate values.

``js
let hello = 'Hello';

let world = 'World';

/Before:/;

let epicPhrase = hello + ' ' + world;

/ES6:/;

let epicPhrase2 = `${hello}${world}`; //alt+96 for the quotes
// French quotes ``
console.log(epicPhrase2);

/Output: Hello World

```

### ES6 Multiline

To create line breaks in strings.

``js
/Before, \n:/ was used;

let lorem =

'any text\n' + 'the text I want to print on the next line.';

``

### ES6 Element Destructuring

Object destructuring allows us to obtain object values ​​more easily and without using dot notation.

``js
let person = {
name: 'Antonio',
age: 23,
country: 'MX',
};

```

````

### ES6 Spread Operator

This allows us to expand multiple elements.

` ... ```js
let children = ["Mauricio","Valeria","Camila","Gabriel","Joaquín"]
let parents = ["Jhon", "Katy"]
/ES6:/
let completeFamily = ["Negra", "Pitbull", "Manchas", ...children, ...parents]

//can be concatenated within the array, also applies to objects
console.log(completeFamily)
//output: ["Negra", "Pitbull", "Manchas"]

chas, "Mauricio," "Valeria," "Camila," "Gabriel," "Joaquín," "Jhon," "Katy"]
````

### ES6 Let

Originally, we had `var` which worked globally.

`var` Declares a variable with global or local scope for the function, regardless of block scope. It allows hoisting.
`let` Declares a variable with global, function-local, or block scope. It is reassignable and does not allow hoisting. `let` Declares variables that are only accessible from within the function's scope. Unlike `var`, which is a global variable.

```js
function letTest() {
  let x = 31;

  if (true) {
    let x = 71; // different variable
    console.log(x); // 71
  }
  console.log(x); // 31
}
varTest();
```

### ES6 Const

It has local and block scope and acts as a constant that cannot be reassigned, but it is mutable. It does not allow hoisting.

``js
// We define MY_FAV as a constant and give it a value of 7
const MY_FAV = 7;

// This will throw an error: Unknown TypeError: Assignment to a constant variable.

MY_FAV = 20;
``

| | var | let | const |

| ------------------------------------ | --- | --- | ----- |

| can be redeclared | yes | no | no |

| can be reassigned | yes | yes | no |

| can be read outside of its own scope | yes | no | no |

### ES6 Arrow Functions: =>

Arrow functions are anonymous functions. They basically shorten the syntax of anonymous functions by including an implicit return statement. and a non-bindable `this`.

``js
const myFunction = (params) => { ... };

const square = num => num _ num; // returns num _ num

//-----------------------//
/Before/
const NAMES = [
{name: 'Alex', age: 26},

{name: 'Matty', age: 24}
]
/ES6/
let listOfNames = NAMES.map(function(item) {
console.log(item.name);

});

``

### ES6 Promises

A Promise is an object that represents the completion or failure of an asynchronous operation. It also serves as a solution to callback hell.

``js
const helloPromise = () => {
return new Promise((resolve, reject) => {
if (false) {
resolve('Hey!');

} else {
reject('Woops!!');

}
});

};

helloPromise()

.then((response) => console.log(response))

.catch((error) => console.log(error));

``

### ES6 Classes

Classes improved the syntax of prototypes and are a way that JavaScript implemented to handle inheritance and OOP.

``js
class calculator {
constructor() {
this.valueA = 0;

this.valueB = 0;

}
sum(valueA, valueB) {
this.valueA = valueA;
this.valueB = valueB;

return this.valueA + this.valueB;

}
} const calc = new calculator();
console.log(calc.sum(2, 4));

```

### ES6 Modules (import and export)

This way we can encapsulate functions or certain logic from our program so that it can be invoked wherever needed.

``js
// module.js
export const welcome = () => console.log('Welcome to the jungle');

const hello = () => console.log('hello');

export default hello;

// index.js
import hello, { welcome } from './module.js';

hello(); // 'hello'
welcome(); // 'Welcome to the jungle'

```

### ES6 Generators

Returns a series of values ​​according to the defined algorithm.
**yield**: The `yield` keyword stops the execution of the generator function, and the value of the expression following the `yield` keyword is returned to the generator caller. It can be considered a version based on a generator of the `return` keyword.

``js
function\* idMaker() {

var index = 0;

while (true) yield index++;

}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// .

```

### **ES7 2016**

ES7 was released in June 2016.

### ES7 Includes

The `includes()` method determines whether an array includes a specific element and returns `true` or `false` depending on whether it is found or not. Previously, `indexOf` and slightly more complex code were used to assign it.

``js
let numbers = [1, 2, 3, 5, 43, 7, 9];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(15)); // false
if (numbers.includes(7)) {

console.log('Found');

} else {

console.log('Not found');

}
```

### ES7 Exponential

This JavaScript revision included a new operator for calculating powers.

``js
const base = 2;

const exponent = 3;

console.log(base \*\* exponent); // 8

```

### **ES8 2017**

ES8 was released in July 2017.

### ES8 Object.entries()

This will allow us to return the key and values ​​of an array.

``js
const data = {
name: 'Antonio',
age: 24,
rocks: true,
};

const entries = Object.entries(data);
console.log(entries);

// [ [ 'name', 'Antonio' ​​], [ 'age', 24 ], [ 'rocks', true ] ]
```

### ES8 Object.values(),Object.keys()

The same as Object.entries but here it only takes only the keys (with `Object.keys`) or only the values ​​(with `Object.values`).

```js
let data = {
name:"Antonio",
lastname:"Ayothe",
age: 23,

let keys = Object.keys(data)

console.log(keys)
/* Output: ["name", "lastname", "age"] */

let values ​​= Object.values(data)

console.log(values)
/* Output: ["Antonio", "Ayola", 23] */
```

### ES8 Padding (padStart, padEnd)

It allows us to add values ​​to a text string, either at the beginning or at the end of it and indicate the maximum size.

```js
const string = 'hello';
const hw = string.padStart(12, 'world ');
// specifies a string of 12 characters
console.log(hw); // 'worldwohello'

const hw = string.padStart(22, 'world ');
console.log(hw); // 'worldworldworldwohello'
//padEnd/;

const string = 'hello';

const hw = string.padEnd(13, 'world');

console.log(hw); // 'helloworldwor'
```

### ES8 Trailing Commas

Also called “final commas”. It's adding a trailing comma to the last element of an object. It prevents errors when adding content to an object.

##### [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas):

> They can be useful when adding new **elements**, **parameters**, or **properties** to JavaScript code. If you want to add a new property, you can add a new line without modifying the previous line if that line already uses a trailing comma.

> This makes version control differences cleaner and code editing can be less problematic.

> JavaScript has allowed trailing commas in array literals from the beginning, and later added them to object literals (ECMAScript 5) and more recently (ECMAScript 2017) to function parameters.

`js
const comma = {
name: 'Antonio',
};
`

### ES8 Async Await

A more user-friendly and intuitive way to understand asynchronous code in JavaScript.

`Async` is a reserved word in JS. With the `async` preposition, we make a function asynchronous that returns a Promise.

Building a function that contains a promise with which we will work with our Async/Await.

``js
/ async function /;
async function asyncCall() {
console.log('calling');
const response = await fetch('api...');

console.log(response);

}

asyncCall();

let hello = async () => {
return 'Hello';

};
// also in arrow functions

````

### **ES9 2018**

ES9 was launched in July 2018.

### ES9 Spread on objects (rest)

The spread operator is used to extract the remaining properties of an object (those that have not yet been declared) and place them into a new object.

```js
const obj = {
name: 'Antonio',
age: 23,
country: 'MX',
};

let { country, ...rest } = obj;

console.log(rest);

//{ name: 'Antonio', age: 23, }

//Also concatenate objects
const obj2 = {
name: 'Antonio',
age: 78,
};

const obj3 = {
...obj2,
country: 'mx',
};
console.log(obj3);
//{ name: 'Antonio', age: 23, country: 'mx' }
````

### ES9 Regex or Regular Expression

Regex allows us to compare whether data matches a pattern. This update to the standard included the .match method, which allows us to obtain the values ​​of the string by separating the elements.

``js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = regexData.exec('2020-04-20');

const year = match[1];

const month = match[2];

const day = match[3];

console.log(year, month, day);

}

```

### **ES10 2019**

ES10 was launched in July 2019.

### ES10 Array.prototype.flat(depth_level)

A new method that allows us to flatten arrays.

``js
const messedArray = [1, 2, 3, [1, 2, 3, [1, 2, 3]], [4, 5, 6]];

const flattedArray = messedArray.flat();

const flatedArray2 = messedArray.flat(2);

console.log(flatedArray); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ], 4, 5, 6 ]
console.log(flatedArray2); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6 ]

let array = [[1], [0], [66], [0, [0, [2, [4]]]]];

console.log(array.flat(Infinity));

/Converts multiple arrays within an array into a single array.

``

### ES10 Array.prototype.flatMap(depth_level)

Same as flat, with the benefit of first manipulating the data before flattening it.

``js
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);

/[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);

/[2, 4, 6, 8]
```

### ES10 String.prototype.trimStart() | String.prototype.trimEnd()

This is used to remove leading or trailing whitespace from code.

`trim()`: Removes leading and trailing whitespace.

`trimStart()`: Removes leading whitespace.

`trimEnd()`: Removes trailing whitespace.

``js
let hello = 'hello world';
console.log(hello.trimStart()); //'hello world'
console.log(hello.trimEnd()); //'hello world'

```

### ES10 Object.fromEntries()

This allows you to convert a key/value array to an object. It does the opposite of Object.entries().

``js
let array = [
['name', 'Antonio'],

['lastname', 'Ayola'],

];

let object = Object.fromEntries(array);

console.log(object);

/* Output: { name: "Antonio", lastname: "Ayola" } */
```

### **ES11 2020**

### ES11 Dynamic Import

This new faceThis feature can be used to improve load time performance if the module isn't needed to start our page or project.

``js
// Dynamic import
async function(){

const module = await import("./file.js")
}

````

### ES11 Big Int

Allows working with numbers greater than 2^53

```js
// 1- Adding an "n" at the end activates the big int on the value:
const aBigNumber = 9007199254740991n;

// 2- The BigInt method activates the value:
const anotherBigNumber = BigInt(9007199254740991);

//Numeric separators
const value = 100000000;

const value = 100_000_000;
````

### ES11 Promise.allSettled()

Returns a promise when all promises are resolved or rejected

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// expected output:
// "fulfilled"
// "rejected"
```

### ES11 globalThis

Refers to the global object, regardless of the context in which your code is running. This changes depending on the environment in which the code is executing. In Node.js, the `global` object is global, in Web Workers it's `self`, and in the browser it's `window`.

``js
console.log(window);

console.log(self);

console.log(frames);

console.log(this);

console.log(globalThis);

``

### ES11 Nullish coalescing operator ??

New logical operator, null operator.

``js
const foo = null ?? 'default string';

console.log(fooo);
// 'default string'

const foo2 = 'not null' ?? 'default string';

console.log(fooo2);

/ 'not null'

result = a !== null && a !== undefined ? a : b;

result = a ?? b; //same as the line above

//another use
const defaultTime = 2;

const animationTime = settings.animationTime ?? defaultTime;

``

### ES11 Bang bang operator !!

In JavaScript, every value has an associated Boolean value, **true** or **false**. For example, a `null` value has an associated Boolean value of `false`. A string value, such as `"abc"`, has an associated Boolean value of `true`.

Here the complete list:

- [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Trut)
- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

`!!` determines whether the associated value is **true** or **false** and returns the opposite

```js
const x = true; // Associated with true.
const a = !x; // The returns the opposite of 'x', false.
const b = !a; // The ! takes value 'a' of false and reverses it back to true.

!!true; // Evaluates to true.
!!false; // Evaluates to false.
```

### ES11 Optional chaining ?

This operator allows you to read the value of a property within an object without having to verify that each property is valid (so it won't throw an error).

``js
const adventurer = {
name: 'Alice',
cat: {
name: 'Dinah',
},
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

console.log(adventurer.someNonExistentMethod.());

/\*Uncaught TypeError: Cannot read properties of undefined (reading 'name')

at <anonymous>\*/

```

### **ES12 2021**

### ES12 replaceAll()

A simpler way to replace multiple words at once; previously, we needed regular expressions for this.

``js
const string =

'JavaScript is wonderful, with JavaScript I can create the future of the web.';

const replacedString = string.replace('JavaScript', 'Rust');

console.log(replacedString);

/ Rust is wonderful, with JavaScript I can create the future of the web.

const replacedString2 = string.replaceAll('JavaScript', 'Rust');

console.log(replacedString2);

/ Rust is wonderful, with Rust I can create the future of the web.

```

### ES12 Private Methods

In object-oriented programming, there is data that we don't want others to have access to. The way to privatize methods or properties is by preceding them with the symbol **#**.

```js
class Message {

/ With the # we make the method private

#show(val) {
console.log(val);

}
}

const message = new Message();
message.show('Hello!');
```

### ES12 Promise.any()

Takes a set of promises and returns the one that resolves as `fulfilled` first (that is not `rejected`). If all promises are rejected, the returned promise is rejected with a `ggregateError`, a new subclass of `Error` that groups individual errors.

``js
const promise1 = Promise.reject(0);

const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"

```

### ES12 WeakRef()

It is a weak reference that does NOT prevent the JavaScript garbage collector from destroyingThe object, unlike a normal or strong reference, is stored in memory.

``js
class AnyClass {
constructor(element){
this.ref = new WeakRef
}
{...}
}
```

### ES12 Logical AND assignment &&=

`&&=` Assignment is only made if the first value is **truthful**.

``js
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// expected output: 2

b &&= 2;
console.log(b);
// expected output: 0

// x &&= y is equal to
// x = x && y;

````

### ES12 Logical OR assignment ||=

`||=` Assignment is only made if the first value is **false**.

```js
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"

// x ||= y is equal to
// x || (x = y);
````

### ES12 logical nullish assignment ??=

`??=` Only assigned if the first value is [nullish](https://developer.mozilla.org/en-US/docs/Glossary/nullish). (**null** or **undefined**)

```js
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;

console.log(a.speed);
// expected output: 25
```

### **TC39**

This is a group of developers and implementers responsible for reviewing all proposals. This committee evaluates them for inclusion in subsequent versions.

[TC39](https://tc39.es/)

---

#### That's all for my report, Joaquín.

I'll finish the table of contents someday. Thanks for reading.
