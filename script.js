let life = 0
let score = 0
let difficulty = ''

function startGame() {
  difficulty = document.querySelector('#difficulty').value
  window.location.href = 'game.html'
}

function resetGame() {
  life = 0
  score = 0
  difficulty = ''
  window.location.href = 'index.html'
}

function game() {
  const mosca = document.querySelector('.mosca')
  mosca.addEventListener('click', addScore)
}

function addScore() {
  score += 1
}

function moveMosca(e) {
  const mosca = document.querySelector('.mosca')
  let randomX = e.offsetX * Math.random() * 100
  let randomY = e.offsetY * Math.random() * 100
  while (randomX > window.innerWidth - 200) {
    randomX = e.offsetX * Math.random() * 100
  }
  while (randomY > window.innerHeight - 200) {
    randomY = e.offsetY * Math.random() * 100
  }
  console.log(window.innerWidth)
  mosca.style.top = `${randomY.toFixed(0)}px`
  mosca.style.left = `${randomX.toFixed(0)}px`
}

if (window.location.pathname === '/game.html') {
  game()
  const scoreDisplay = document.querySelector('#score')
  switch (difficulty) {
    case 'medium':
      setInterval(() => {
        moveMosca()
      }, 3000)
      break
    case 'hard':
      setInterval(() => {
        moveMosca()
      }, 2000)
      break
    case 'impossible':
      setInterval(() => {
        moveMosca()
      }, 1000)
      break
  }
  setInterval(() => {
    scoreDisplay.textContent = `${score}`
  })
}
