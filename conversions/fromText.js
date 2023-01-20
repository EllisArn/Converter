export function textToBinary(text) {
  let binary = ''
  for (let i = 0; i < text.length; i++) {
    binary += text[i].charCodeAt(0).toString(2) + ' '
  }
  return binary
}

export function textToHex(text) {
    let hex = ''
    for (let i = 0; i < text.length; i++) {
        hex += text[i].charCodeAt(0).toString(16) + ' '
    }
    return hex
}
