import {
  binaryToHex,
  binaryToDec,
  binaryToOct,
} from './conversions/fromBinary.js'
import {
  hexToBinary,
  hexToDec,
  hexToOct,
} from './conversions/fromHex.js'
import { decToBinary, decToHex, decToOct } from './conversions/fromDec.js'
import { octToBinary, octToHex, octToDec } from './conversions/fromOct.js'
import { download } from './download.js'

document.querySelectorAll('textarea').forEach((input) => {
  input.addEventListener('input', (element) => {
    element.target.style.height = '5px'
    element.target.style.height = element.target.scrollHeight - 3 + 'px'
  })
})

document.querySelectorAll('.copyButton').forEach((button) => {
  button.addEventListener('click', (e) => {
    const id = e.target.id
if (id === 'copyBinary') {
      const output = document.querySelector('#binaryOutput')
      navigator.clipboard.writeText(output.value)
    } else if (id === 'copyHex') {
      const output = document.querySelector('#hexOutput')
      navigator.clipboard.writeText(output.value)
    } else if (id === 'copyDec') {
      const output = document.querySelector('#decOutput')
      navigator.clipboard.writeText(output.value)
    } else if (id === 'copyOct') {
      const output = document.querySelector('#octOutput')
      navigator.clipboard.writeText(output.value)
    }
  })
})

const selectFrom = document.querySelector('#selectFrom')

const binaryList = document.querySelector('#binaryList')
const hexList = document.querySelector('#hexList')
const decList = document.querySelector('#decList')
const octList = document.querySelector('#octList')

export const binaryOutput = document.querySelector('#binaryOutput')
export const hexOutput = document.querySelector('#hexOutput')
export const decOutput = document.querySelector('#decOutput')
export const octOutput = document.querySelector('#octOutput')

const preBinary = document.querySelector('#preBinary')
const preHex = document.querySelector('#preHex')
const preDec = document.querySelector('#preDec')
const preOct = document.querySelector('#preOct')

const input = document.querySelector('#input')
const convertButton = document.querySelector('#convertButton')

input.focus()
input.select()

convertButton.addEventListener('click', converter)

hideUnused()
download()

selectFrom.addEventListener('change', () => {
  input.value = ''
  binaryOutput.value = ''
  binaryOutput.style = 'height: 1rem;'
  hexOutput.value = ''
  hexOutput.style = 'height: 1rem;'
  decOutput.value = ''
  decOutput.style = 'height: 1rem;'
  octOutput.value = ''
  octOutput.style = 'height: 1rem;'
  hideUnused()
})

function hideUnused() {
 if (selectFrom.value === 'binary') {
    binaryList.style = 'display: none;'
    hexList.style = 'display: flex;'
    decList.style = 'display: flex;'
    octList.style = 'display: flex;'
  } else if (selectFrom.value === 'hexadecimal') {
    binaryList.style = 'display: flex;'
    hexList.style = 'display: none;'
    decList.style = 'display: flex;'
    octList.style = 'display: flex;'
  } else if (selectFrom.value === 'decimal') {
    binaryList.style = 'display: flex;'
    hexList.style = 'display: flex;'
    decList.style = 'display: none;'
    octList.style = 'display: flex;'
  } else if (selectFrom.value === 'octal') {
    binaryList.style = 'display: flex;'
    hexList.style = 'display: flex;'
    decList.style = 'display: flex;'
    octList.style = 'display: none;'
  }

  preBinary.innerHTML = 'Binary'
  preHex.innerHTML = 'Hexadecimal'
  preDec.innerHTML = 'Decimal'
  preOct.innerHTML = 'Octal'

  input.focus()
  input.select()
}

input.addEventListener('input', () => {
  if (selectFrom.value === 'decimal' || selectFrom.value === 'octal') {
    input.value = input.value.replace(/[^0-9]+/g, '')
  }
  else if (selectFrom.value === 'hexadecimal') {
    input.value = input.value.replace(/[^0-9a-fA-F]+/g, '')
  }
  else if (selectFrom.value === 'binary') {
    input.value = input.value.replace(/[^0-1]+/g, '')
  }
})

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    converter()
  }
})

function converter() {
if (selectFrom.value === 'binary') {
    hexOutput.value = binaryToHex(input.value)
    decOutput.value = binaryToDec(input.value)
    octOutput.value = binaryToOct(input.value)
  } else if (selectFrom.value === 'hexadecimal') {
    binaryOutput.value = hexToBinary(input.value)
    decOutput.value = hexToDec(input.value)
    octOutput.value = hexToOct(input.value)
  } else if (selectFrom.value === 'decimal') {
    binaryOutput.value = decToBinary(input.value)
    hexOutput.value = decToHex(input.value)
    octOutput.value = decToOct(input.value)
  } else if (selectFrom.value === 'octal') {
    binaryOutput.value = octToBinary(input.value)
    hexOutput.value = octToHex(input.value)
    decOutput.value = octToDec(input.value)
  }
  binaryOutput.style.height = '5px'
  binaryOutput.style.height = binaryOutput.scrollHeight - 3 + 'px'
  hexOutput.style.height = '5px'
  hexOutput.style.height = hexOutput.scrollHeight - 3 + 'px'
  decOutput.style.height = '5px'
  decOutput.style.height = decOutput.scrollHeight - 3 + 'px'
  octOutput.style.height = '5px'
  octOutput.style.height = octOutput.scrollHeight - 3 + 'px'
}

