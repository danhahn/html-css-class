---
title: Lesson 6
lesson: Javascript Examples
author: Dan Hahn
date: 10/30/2017
template: article.jade

nav:
  Javascript: index.html
  JS Data Type: js-examples.html
  JS DOM Select: js-dom-select.html
  Jquery: jquery.html
---

## JavaScript Variable 

Variable declarations, wherever they occur, are processed before any code is executed. The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value.

```javascript
var name = "Dan";

// write out the value of Name to the console.
console.log(name); // Dan

```

A variable can be any of the data types listed below.  


## JavaScript Data Types

When we create a variable in JavaScript the values that are set are the data types.  

The latest ECMAScript standard defines seven data types:

## Six data types that are primitives:
* Boolean
* Null
* Undefined
* Number
* String
* Symbol (new in ECMAScript 6)

All types except objects define immutable values (values, which are incapable of being changed). For example and unlike to C, Strings are immutable. We refer to values of these types as "primitive values".

### Boolean type
Boolean represents a logical entity and can have two values: `true`, and `false`.

```javascript
var isHappy = true;

console.log(isHappy); // true

isHappy = false;

console.log(isHappy); // false

if (isHappy === true) {
  console.log("😙");
} else {
  conosle.log("☹️");
}
 // ☹️ since `isHappy` is false

```

### Null type
The Null type has exactly one value: `null`.  In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. In other words no value. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" target="_blank">Read More</a>

```javascript
var notSet = null;

console.log(notSet); // null

```

### Undefined type
A variable that has not been assigned a value has the value `undefined`.

```javascript
var x;

console.log(x); // undefined
```

### Number type
a number is able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and `NaN` (not-a-number).

With numbers you can do math on them `+` add, `-` subtract, `*` multiply and `/` divide.

```javascript
console.log(2 + 4); // 6
console.log(4 - 2); // 2
console.log(3 * 3): // 9
console.log(12 / 3); // 3
console.log(10 / 0); // Infinity

console.log(3 + "a"); // "3a"
console.log(3 / "a"); // NaN
```


### String type
JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">Learn More</a>

```javascript
var name = "Dan Hahn";

console.log(name); // "Dan Hahn"

var firstName = "Dan";
var lastName = "Hahn";

const fullName = firstName + lastName;

console.log(fullName); // "DanHahn"

console.log(`${firstName} ${lastName}`); // "Dan Hahn"

```

## JavaScript Array

The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

In other words an array is a list of strings, numbers, boolans, object or arrays.  They can be acceed by their index with is a zero base index meaning it starts counting at `0`.

There are number of build in tools(methods) that can help get information about the array.  

```javascript
var fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2

// get the first item in the array
var first = fruits[0]; // Apple

// get the last item in the array
var last = fruits[fruits.length - 1]; // Banana

// add an item to the array
fruits.push('Grape');

console.log(fruits.length); // 3
console.log(fruits); // ['Apple', 'Banana', 'Grape'];

```

## JavaScript Object

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) 

Unlike an array does not have a "order" you will need to get the value from a `key`.

```javascript
// create a object
var person = {};

console.log(person); // {}

//Let create the same object again but this time with some data in it.

var person = {  
  firstName : "Dan",
  lastName : "Hahn",
  email: "dan@svahtml.com",
  interests: ['html', 'css', 'javascript'],
  isCool: false,
  age: 22 
}

console.log(person);
// { 
//   firstName: 'Dan',
//   lastName: 'Hahn',
//   email: 'dan@svahtml.com',
//   interests: [ 'html', 'css', 'javascript' ],
//   isCool: false,
//   age: 22 
// }

// access a value on the object.
console.log(person['firstName']); // "Dan"
// or
console.log(person.age); // 22
console.log(person.email); // "dan@svahtml.com"

// change a value on an object.  
person.isCool = true;
console.log(person);
// { 
//   firstName: 'Dan',
//   lastName: 'Hahn',
//   email: 'dan@svahtml.com',
//   interests: [ 'html', 'css', 'javascript' ],
//   isCool: true,
//   age: 22 
// }

// add key to the object
person.city = "New York";
console.log(person);
// { 
//   firstName: 'Dan',
//   lastName: 'Hahn',
//   email: 'dan@svahtml.com',
//   interests: [ 'html', 'css', 'javascript' ],
//   isCool: false,
//   age: 22,
//   city: 'New York' 
// }
```

## JavaScript function 

Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

```javascript
// let build a function that will say hello to the console
function sayHi() {
  var greeting = "Hello World";
  console.log(greeting);
}

// the function will not fire until it is called;

// lets call the function 

sayHi();
// "Hello World!"

// Lets customize our function by tell the name to say hi to. 
// We need to pass the name in to the function.

function sayHi(displayName) {
  // displayName is passed in to the function and set 
  // to a variable of `displayName`
  // it would look like this var displayName = "Dan";
  // We can now use this variable in our function just 
  // like we could any other variable that may be defined. 
  var greeting = `Hello ${displayName}!`;
  console.log(greeting);
}

sayHi('Dan');
// "Hello Dan!"

sayHi('Larry');
// "Hello Larry!"

```

We can do many things with our function.  One way to keep the code clean is to break the function up in to smaller parts.  This is called functional programing.  The idea is that each function will only do one thing.  We need to introduce a new idea `return`.  A `return` will return a calculated value from another function. 

Lets build a function that will calculate a dogs age (age times 7) and display its bark.

```javascript
// this will calculate the dogs age
function calcDogAge(age) {
  return age * 7;
  // return the age times 7;
}

function dogGreeting(dogName, age, greeting) {
  // get the age of the dog.
  var dogAge = calcDogAge(age);
  // use a build in string function to repeat the greeting two time. 
  var dogGreeting = greeting.repeat(2);

  // build the string to be return using a string template.
  return `${dogGreeting} ${dogName} is ${dogAge} years old.`;
  // return the full string.
}

console.log(dogGreeting('Snickers', 3, 'Woof'));
// "WoofWoof Snickers is 21 years old."

alert(dogGreeting('Puddles', 1, 'Bark'));
// alert box this time.
// "BarkBark Puddles is 7 years old."
``` 

Here the function does not display the string but return the full string and the thing that is calling the function is responable for how to display the string. 