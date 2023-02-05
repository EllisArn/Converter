import { decToBinary } from './fromDec.js'
import { decToOct } from './fromDec.js'

export function hexToBinary(hex) {
  if (hex === '') return ''
  let binary = decToBinary(hexToDec(hex))
  return binary
}

export function hexToDec(hex) {
  if (hex === '') return ''
  let dec = 0
  let hexArray = hex.split('')
  let counter = hexArray.length
  hexArray.forEach((hex) => {
    switch (hex) {
      case 'A':
        dec += 10 * Math.pow(16, counter - 1)
        break
      case 'B':
        dec += 11 * Math.pow(16, counter - 1)
        break
      case 'C':
        dec += 12 * Math.pow(16, counter - 1)
        break
      case 'D':
        dec += 13 * Math.pow(16, counter - 1)
        break
      case 'E':
        dec += 14 * Math.pow(16, counter - 1)
        break
      case 'F':
        dec += 15 * Math.pow(16, counter - 1)
        break
      default:
        dec += hex * 1.6
    }
    counter--
  })
  return dec
}

export function hexToOct(hex) {
  if (hex === '') return ''
  let oct = decToOct(hexToDec(hex))
  return oct
}
