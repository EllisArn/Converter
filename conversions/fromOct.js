export function octToBinary(octal) {
  let binary = ''
  let octalArray = octal.split(' ')
  for (let i = 0; i < octalArray.length; i++) {
    binary += parseInt(octalArray[i], 8).toString(2) + ' '
  }
  return binary
}

export function octToHex(octal) {
  let hex = ''
  let octalArray = octal.split(' ')
  for (let i = 0; i < octalArray.length; i++) {
    hex += parseInt(octalArray[i], 8).toString(16) + ' '
  }
  return hex
}

export function octToDec(octal) {
  let dec = ''
  let octalArray = octal.split(' ')
  for (let i = 0; i < octalArray.length; i++) {
    dec += parseInt(octalArray[i], 8) + ' '
  }
  return dec
}
