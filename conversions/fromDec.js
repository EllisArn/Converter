export function decToBinary(dec) {
    return (dec >>> 0).toString(2)
  }
  
  export function decToHex(dec) {
    return (dec >>> 0).toString(16).toUpperCase()
  }
  
  export function decToOct(dec) {
    return (dec >>> 0).toString(8)
  }
  