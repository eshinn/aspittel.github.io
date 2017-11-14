// Google Analytics!
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  },
  i[r].l = 1 * new Date()
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]
  a.async = 1
  a.src = g
  m
    .parentNode
    .insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
ga('create', 'UA-84733823-1', 'auto')
ga('send', 'pageview')

// Animation on letters!
Array.from(document.getElementsByClassName("letter")).forEach(letter => {
  letter.addEventListener("mouseover", (e) => {
    letter.classList.add("hovered")
  })
  letter.addEventListener("animationend", (e) => {
    letter.classList.remove("hovered")
  })
})

// Random shapes!

let colors = []
function setup() {
  colors = [
    color(255, 143, 0, 80),
    color(255, 128, 171, 80),
    color(255, 193, 7, 80),
    color(76, 175, 80, 80),
    color(0, 188, 212, 80),
    color(171, 71, 188, 80),
    color(239, 83, 80, 80)
  ]
  createCanvas(window.innerWidth, document.body.offsetHeight)
  noStroke()
}

let idx = 0

function randomChoice(choices) {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function mouseClicked() {
  let sideLength = Math.floor((Math.random() * 200) + 1)
  fill(randomChoice(colors))
  if (idx % 3 == 0) {
    ellipse(mouseX, mouseY, sideLength, sideLength)
  } else if (idx % 3 == 1) {
    rect(mouseX, mouseY, sideLength, sideLength)
  } else {
    triangle(mouseX, mouseY, mouseX + sideLength, mouseY, mouseX + (.5 * sideLength), mouseY - sideLength)
  }
  idx = Math.floor((Math.random() * 3))
}

window.onresize = () => {
  resizeCanvas(window.innerWidth, document.body.offsetHeight)
}

// Dynamic Header!
window.onscroll = (e) => {
  let scrollPosition = window.scrollY
  let headerName = document.getElementById("header-name")
  let header = document.getElementById("header")
  if (scrollPosition > 179) {
    headerName.classList.remove("hidden")
    header.classList.add("white")
  } else {
    headerName.classList.add("hidden")
    header.classList.remove("white")
  }
}

