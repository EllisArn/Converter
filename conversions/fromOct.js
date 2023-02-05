import { decToHex } from "./fromDec.js"
import { decToBinary } from "./fromDec.js"

export function octToBinary(octal) {
  if (octal === '') return ''
  let binary = decToBinary(octToDec(octal))
  return binary
}

export function octToHex(octal) {
  if (octal === '') return ''
  let hex = decToHex(octToDec(octal).toString())
  return hex.toUpperCase()
}

export function octToDec(octal) {
  if (octal === '') return ''
  let dec = 0
  let octalArray = octal.split('')
  let counter = octalArray.length
  octalArray.forEach(octal => {
    dec += octal * Math.pow(8, counter - 1)
    counter--
  });
  return dec
}
