export function binaryToText(binary) {
  let text = ''
  let binaryArray = binary.split(' ')
  for (let i = 0; i < binaryArray.length; i++) {
    text += String.fromCharCode(parseInt(binaryArray[i], 2))
  }
  return text
}

export function binaryToHex(binary) {
  let hex = ''
  let binaryArray = binary.split(' ')
  for (let i = 0; i < binaryArray.length; i++) {
    hex += parseInt(binaryArray[i], 2).toString(16) + ' '
  }
  return hex
}

export function binaryToDec(binary) {
  let dec = ''
  let binaryArray = binary.split(' ')
  for (let i = 0; i < binaryArray.length; i++) {
    dec += parseInt(binaryArray[i], 2) + ' '
  }
  return dec
}

export function binaryToOct(binary) {
  let oct = ''
  let binaryArray = binary.split(' ')
  for (let i = 0; i < binaryArray.length; i++) {
    oct += parseInt(binaryArray[i], 2).toString(8) + ' '
  }
  return oct
}
