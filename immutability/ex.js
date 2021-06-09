'use strict'

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1
}

function pickNumber(numbers, newNumber) {
  if (!numbers.includes(newNumber)) {
    numbers = [...numbers, newNumber]
    return numbers.sort((a, b) => a - b)
  }
  return numbers
}

var luckyLotteryNumbers = []

while (luckyLotteryNumbers.length < 6) {
  luckyLotteryNumbers = pickNumber(
    Object.freeze(luckyLotteryNumbers),
    lotteryNum()
  )
}

console.log(luckyLotteryNumbers)
