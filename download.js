export function download() {
  const binarySaveTxt = document.querySelector('#binarySaveTxt')
  binarySaveTxt.addEventListener('click', () => {
    if (binaryOutput.value !== '') {
      const file = new Blob([binaryOutput.value], { type: 'text/plain' })
      binarySaveTxt.href = URL.createObjectURL(file)
      binarySaveTxt.download = 'binary.txt'
    }
  })

  const hexSaveTxt = document.querySelector('#hexSaveTxt')
  hexSaveTxt.addEventListener('click', () => {
    if (hexOutput.value !== '') {
      const file = new Blob([hexOutput.value], { type: 'text/plain' })
      hexSaveTxt.href = URL.createObjectURL(file)
      hexSaveTxt.download = 'hexadecimal.txt'
    }
  })

  const decSaveTxt = document.querySelector('#decSaveTxt')
  decSaveTxt.addEventListener('click', () => {
    if (decOutput.value !== '') {
      const file = new Blob([decOutput.value], { type: 'text/plain' })
      decSaveTxt.href = URL.createObjectURL(file)
      decSaveTxt.download = 'decimal.txt'
    }
  })

  const octSaveTxt = document.querySelector('#octSaveTxt')
  octSaveTxt.addEventListener('click', () => {
    if (octOutput.value !== '') {
      const file = new Blob([octOutput.value], { type: 'text/plain' })
      octSaveTxt.href = URL.createObjectURL(file)
      octSaveTxt.download = 'octal.txt'
    }
  })

  const binarySaveBin = document.querySelector('#binarySaveBin')
  binarySaveBin.addEventListener('click', () => {
    if (binaryOutput.value !== '') {
      const file = new Blob([binaryOutput.value], { type: 'text/plain' })
      binarySaveBin.href = URL.createObjectURL(file)
      binarySaveBin.download = 'binary.bin'
    }
  })

  const hexSaveBin = document.querySelector('#hexSaveBin')
  hexSaveBin.addEventListener('click', () => {
    if (hexOutput.value !== '') {
      const file = new Blob([hexOutput.value], { type: 'text/plain' })
      hexSaveBin.href = URL.createObjectURL(file)
      hexSaveBin.download = 'hexadecimal.bin'
    }
  })

  const decSaveBin = document.querySelector('#decSaveBin')
  decSaveBin.addEventListener('click', () => {
    if (decOutput.value !== '') {
      const file = new Blob([decOutput.value], { type: 'text/plain' })
      decSaveBin.href = URL.createObjectURL(file)
      decSaveBin.download = 'decimal.bin'
    }
  })

  const octSaveBin = document.querySelector('#octSaveBin')
  octSaveBin.addEventListener('click', () => {
    if (octOutput.value !== '') {
      const file = new Blob([octOutput.value], { type: 'text/plain' })
      octSaveBin.href = URL.createObjectURL(file)
      octSaveBin.download = 'octal.bin'
    }
  })
}
