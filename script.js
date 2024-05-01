const headerAnimation = document.querySelectorAll('.main-heading')

const textForAnimation =
  [['Strategize', ' ', 'Your', ' ', 'Savings', ' ', 'and', ' ', 'Accelerate', ' ', 'Your', ' ', 'Goals']]
const delay = 50

function spanCreate (n) {
  var spanRet = ''
  for (let i = 0; i < n; i++) {
    spanRet += '<span></span>'
  }
  return spanRet
}

function animateText () {
  for (let i = 0; i < textForAnimation.length; i++) {
    headerAnimation[i].innerHTML = spanCreate(textForAnimation[i].length)
  }
  for (let i = 0; i < textForAnimation.length; i++) {
    const span = headerAnimation[i].querySelectorAll('span')
    let lineIndex = 0,
      charIndex = 0
    function animateLine () {
      const animatedtext = span[lineIndex]
      const line = textForAnimation[i][lineIndex]
      const cur = line.substring(0, charIndex + 1)
      animatedtext.innerHTML = cur
      charIndex++
      if (charIndex < line.length) {
        setTimeout(animateLine, delay)
      } else {
        lineIndex++
        charIndex = 0
        if (lineIndex < textForAnimation[i].length) {
          setTimeout(animateLine, delay)
        }
      }
    }
    animateLine()
  }
}
setTimeout(animateText, 1200);