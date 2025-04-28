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
  const scoreDisplay = document.querySelector('#score')

  mosca.addEventListener('click', moveMosca)

  setInterval(() => {}, 1000)
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

  score += 1
}

if (window.location.pathname === '/game.html') {
  const scoreDisplay = document.querySelector('#score')
  switch (difficulty) {
    case 'medium':
      break
    case 'hard':
      break
    case 'impossible':
      break
  }
  setInterval(() => {
    scoreDisplay.textContent = `${score}`
  })
  game()
}
