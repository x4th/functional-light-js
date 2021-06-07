'use strict'

/* function output(txt) {
  console.log(txt)
} */
const output = console.log.bind(console)

/* function printIf(shouldPrintIt) {
  return function (msg) {
    if (shouldPrintIt(msg)) {
      output(msg)
    }
  }
} */

const when =
  (fn) =>
  (predicate) =>
  (...args) => {
    if (predicate(...args)) return fn(...args)
  }

const printIf = when(output)

function isShortEnough(str) {
  return str.length <= 5
}

/* function isLongEnough(str) {
  return !isShortEnough(str)
} */

const not =
  (fn) =>
  (...args) =>
    !fn(...args)

const isLongEnough = not(isShortEnough)

var msg1 = 'Hello'
var msg2 = msg1 + ' World'

printIf(isShortEnough)(msg1) // Hello
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2) // Hello World
