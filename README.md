# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @2san/lotide`

**Require it:**

`const _ = require('@2san/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: retrieves head value or first element in an array
* `tail(...)`: retrieves tail values or elements in array starting from index 1
* `middle(...)`: retrieves middle elements in an array, will return an array with two elements if original array is of even length.
* `assertEqual(...)`: Colorful Assertion test, checks if two values are === equal
* `assertArraysEqual(...)`: Colorful Assertion test to be used on array values. checks if two arrays are equal.
  
The following functions are working, but do not have tests completed:
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,