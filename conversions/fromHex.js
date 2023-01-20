export function hexToText(hex) {
  let text = ''
  let hexArray = hex.split(' ')
  for (let i = 0; i < hexArray.length; i++) {
    text += String.fromCharCode(parseInt(hexArray[i], 16))
  }
  return text
}

export function hexToBinary(hex) {
  let binary = ''
  let hexArray = hex.split(' ')
  for (let i = 0; i < hexArray.length; i++) {
    binary += parseInt(hexArray[i], 16).toString(2) + ' '
  }
  return binary
}

export function hexToDec(hex) {
  let dec = ''
  let hexArray = hex.split(' ')
  for (let i = 0; i < hexArray.length; i++) {
    dec += parseInt(hexArray[i], 16) + ' '
  }
  return dec
}

export function hexToOct(hex) {
  let oct = ''
  let hexArray = hex.split(' ')
  for (let i = 0; i < hexArray.length; i++) {
    oct += parseInt(hexArray[i], 16).toString(8) + ' '
  }
  return oct
}
