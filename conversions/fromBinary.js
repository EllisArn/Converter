import { decToHex, decToOct } from "./fromDec.js";

export function binaryToHex(binary) {
  if (binary === '') return ''
  let hex = decToHex(binaryToDec(binary).toString())
  return hex.toUpperCase()
}

export function binaryToDec(binary) {
  if (binary === '') return ''
  let dec = 0
  let binaryArray = binary.split('')
  let counter = binaryArray.length
  binaryArray.forEach(binary => {
    dec += binary * Math.pow(2, counter - 1)
    counter--
  });
  return dec
}

export function binaryToOct(binary) {
  if (binary === '') return ''
  let oct = decToOct(binaryToDec(binary))
  return oct
}
