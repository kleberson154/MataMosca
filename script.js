let life = 3
let score = 0
let moscaInterval

function startGame() {
  let difficulty = document.querySelector('#difficulty').value
  if (difficulty === '') {
    alert('Please select a difficulty')
    return
  } else {
    localStorage.setItem('difficulty', difficulty)
    window.location.href = 'game.html'
  }
}

function resetGame() {
  life = 3
  score = 0
  difficulty = ''
  localStorage.removeItem('difficulty')
  localStorage.removeItem('scorePoints')
  window.location.href = 'index.html'
}

function moveAndResizeMosca() {
  const mosca = document.querySelector('.mosca')
  const imgMosca = mosca.querySelector('.imgMosca')

  let randomX = Math.random() * (window.innerWidth - 100)
  let randomY = Math.random() * (window.innerHeight - 100)

  let randomSize = Math.random() * 20 + 40

  mosca.style.top = `${randomY}px`
  mosca.style.left = `${randomX}px`
  mosca.style.width = `${randomSize}px`
  mosca.style.height = `${randomSize}px`
  let num = Math.random().toFixed(0)
  console.log(num)
  if (num == 0) {
    imgMosca.classList.add('esquerda')
  } else {
    imgMosca.classList.remove('esquerda')
  }
}

function startMoscaMovement(difficulty) {
  let intervalTime
  console.log(difficulty)
  switch (difficulty) {
    case 'medium':
      intervalTime = 3000
      break
    case 'hard':
      intervalTime = 2000
      break
    case 'impossible':
      intervalTime = 1000
      break
    default:
      intervalTime = 3000
  }

  moscaInterval = setInterval(() => {
    if (life > 0) {
      let hearth = document.querySelectorAll('.hearth')
      moveAndResizeMosca()
      life--
      hearth[life].src = './img/coracao_vazio.png'
      console.log(intervalTime)
    }
  }, intervalTime)
}

function restartMoscaMovement() {
  clearInterval(moscaInterval)
  startMoscaMovement(localStorage.getItem('difficulty'))
}

function addScore() {
  score += 1
}

function updateScore() {
  const scoreDisplay = document.querySelector('#score')
  setInterval(() => {
    if (score >= 10) {
      window.location.href = 'win.html'
    } else {
      localStorage.setItem('scorePoints', score)
      scoreDisplay.textContent = `${score}`
    }
  }, 100)
}

function updateLife() {
  setInterval(() => {
    if (life == 0) {
      window.location.href = 'endGame.html'
    }
  }, 100)
}

function game() {
  updateScore()
  updateLife()
  const mosca = document.querySelector('.mosca')
  mosca.addEventListener('click', addScore)
  mosca.addEventListener('click', () => {
    moveAndResizeMosca()
    restartMoscaMovement()
  })
  startMoscaMovement(localStorage.getItem('difficulty'))
}

if (window.location.pathname === '/game.html') {
  moveAndResizeMosca()
  game()
}

if (window.location.pathname === '/endGame.html') {
  document.querySelector('#scoreDefeat').textContent = `${localStorage.getItem(
    'scorePoints'
  )}`
}

if (window.location.pathname === '/win.html') {
  document.querySelector('#scoreWin').textContent = `10`
}
