import { textToBinary, textToHex } from './conversions/fromText.js'
import {
  binaryToText,
  binaryToHex,
  binaryToDec,
  binaryToOct,
} from './conversions/fromBinary.js'
import {
  hexToText,
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
    if (id === 'copyText') {
      const output = document.querySelector('#textOutput')
      navigator.clipboard.writeText(output.value)
    } else if (id === 'copyBinary') {
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

const textList = document.querySelector('#textList')
const binaryList = document.querySelector('#binaryList')
const hexList = document.querySelector('#hexList')
const decList = document.querySelector('#decList')
const octList = document.querySelector('#octList')

export const textOutput = document.querySelector('#textOutput')
export const binaryOutput = document.querySelector('#binaryOutput')
export const hexOutput = document.querySelector('#hexOutput')
export const decOutput = document.querySelector('#decOutput')
export const octOutput = document.querySelector('#octOutput')

const preText = document.querySelector('#preText')
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
  textOutput.value = ''
  textOutput.style = 'height: 1rem;'
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
  if (selectFrom.value === 'text') {
    textList.style = 'display: none;'
    binaryList.style = 'display: flex;'
    hexList.style = 'display: flex;'
    decList.style = 'display: none;'
    octList.style = 'display: none;'
  } else if (selectFrom.value === 'binary') {
    textList.style = 'display: flex;'
    binaryList.style = 'display: none;'
    hexList.style = 'display: flex;'
    decList.style = 'display: flex;'
    octList.style = 'display: flex;'
  } else if (selectFrom.value === 'hexadecimal') {
    textList.style = 'display: flex;'
    binaryList.style = 'display: flex;'
    hexList.style = 'display: none;'
    decList.style = 'display: flex;'
    octList.style = 'display: flex;'
  } else if (selectFrom.value === 'decimal') {
    textList.style = 'display: none;'
    binaryList.style = 'display: flex;'
    hexList.style = 'display: flex;'
    decList.style = 'display: none;'
    octList.style = 'display: flex;'
  } else if (selectFrom.value === 'octal') {
    textList.style = 'display: none;'
    binaryList.style = 'display: flex;'
    hexList.style = 'display: flex;'
    decList.style = 'display: flex;'
    octList.style = 'display: none;'
  }

  preText.innerHTML = 'Text'
  preBinary.innerHTML = 'Binary'
  preHex.innerHTML = 'Hexadecimal'
  preDec.innerHTML = 'Decimal'
  preOct.innerHTML = 'Octal'

  input.focus()
  input.select()
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    converter()
  }
})

function converter() {
  textOutput.value = ''
  binaryOutput.value = ''
  hexOutput.value = ''
  decOutput.value = ''
  octOutput.value = ''
  if (selectFrom.value === 'text') {
    binaryOutput.value += textToBinary(input.value)
    hexOutput.value += textToHex(input.value)
  } else if (selectFrom.value === 'binary') {
    textOutput.value += binaryToText(input.value)
    hexOutput.value += binaryToHex(input.value)
    decOutput.value += binaryToDec(input.value)
    octOutput.value += binaryToOct(input.value)
  } else if (selectFrom.value === 'hexadecimal') {
    textOutput.value += hexToText(input.value)
    binaryOutput.value += hexToBinary(input.value)
    decOutput.value += hexToDec(input.value)
    octOutput.value += hexToOct(input.value)
  } else if (selectFrom.value === 'decimal') {
    binaryOutput.value += decToBinary(input.value)
    hexOutput.value += decToHex(input.value)
    octOutput.value += decToOct(input.value)
  } else if (selectFrom.value === 'octal') {
    binaryOutput.value += octToBinary(input.value)
    hexOutput.value += octToHex(input.value)
    decOutput.value += octToDec(input.value)
  }
  textOutput.style.height = '5px'
  textOutput.style.height = textOutput.scrollHeight - 3 + 'px'
  binaryOutput.style.height = '5px'
  binaryOutput.style.height = binaryOutput.scrollHeight - 3 + 'px'
  hexOutput.style.height = '5px'
  hexOutput.style.height = hexOutput.scrollHeight - 3 + 'px'
  decOutput.style.height = '5px'
  decOutput.style.height = decOutput.scrollHeight - 3 + 'px'
  octOutput.style.height = '5px'
  octOutput.style.height = octOutput.scrollHeight - 3 + 'px'
}

