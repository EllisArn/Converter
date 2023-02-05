export function decToBinary(dec) {
  if (dec === '') return ''
  let binary = ''
  let i = 0;
  while (i < dec) {
    binary = (dec % 2) + binary
    dec = Math.floor(dec / 2)
  }
  while (binary.length % 4 !== 0) {
    binary = '0' + binary
  }
  return binary.match(/.{1,4}/g).join(' ')
}
  
export function decToHex(dec) {
  if (dec === '') return ''
  let hex = ''
  let i = 0;
  let decArray = dec.split(' ')
  decArray.forEach(decimal => {
    while (i < decimal) {
      switch (decimal % 16) {
        case 10: 
          hex = 'A' + hex
          break
        case 11:
          hex = 'B' + hex
          break
        case 12:
          hex = 'C' + hex
          break
        case 13:
          hex = 'D' + hex
          break
        case 14:
          hex = 'E' + hex
          break
        case 15:
          hex = 'F' + hex
          break
        default:
          hex = decimal % 16 + hex
      }
      decimal = Math.floor(decimal / 16)
    }
  });
  return hex.toUpperCase()
}
  
export function decToOct(dec) {
  if (dec === '') return ''
  let oct = ''
  let i = 0;
  while (i < dec) {
    oct = (dec % 8) + oct
    dec = Math.floor(dec / 8)
  }
  return oct
}
  