document.addEventListener('DOMContentLoaded', () => {
  const snake = document.getElementById('snake');
  const food = document.getElementById('food');

  let snakeX = 10;
  let snakeY = 10;
  let foodX = 5;
  let foodY = 5;
  let snakeDirection = 'right';
  let snakeSpeed = 100;
  let snakeBody = [{ x: 10, y: 10 }];

  function updateSnake() {
    snake.style.left = snakeX * 20 + 'px';
    snake.style.top = snakeY * 20 + 'px';
  }

  function updateFood() {
    food.style.left = foodX * 20 + 'px';
    food.style.top = foodY * 20 + 'px';
  }

  function moveSnake() {
    switch (snakeDirection) {
      case 'up':
        snakeY -= 1;
        break;
      case 'down':
        snakeY += 1;
        break;
      case 'left':
        snakeX -= 1;
        break;
      case 'right':
        snakeX += 1;
        break;
    }
  }

  function checkCollision() {
    if (snakeX < 0 || snakeX >= 15 || snakeY < 0 || snakeY >= 15) {
      resetGame();
    }

    for (let i = 1; i < snakeBody.length; i++) {
      if (snakeX === snakeBody[i].x && snakeY === snakeBody[i].y) {
        resetGame();
      }
    }

    if (snakeX === foodX && snakeY === foodY) {
      snakeBody.push({ x: foodX, y: foodY });
      generateFood();
    }
  }

  function resetGame() {
    snakeX = 10;
    snakeY = 10;
    snakeDirection = 'right';
    snakeBody = [{ x: 10, y: 10 }];
  }

  function generateFood() {
    foodX = Math.floor(Math.random() * 15);
    foodY = Math.floor(Math.random() * 15);

    for (let i = 0; i < snakeBody.length; i++) {
      if (foodX === snakeBody[i].x && foodY === snakeBody[i].y) {
        generateFood();
      }
    }
  }

  function gameLoop() {
    moveSnake();
    checkCollision();

    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i].x = snakeBody[i - 1].x;
      snakeBody[i].y = snakeBody[i - 1].y;
    }

    snakeBody[0].x = snakeX;
    snakeBody[0].y = snakeY;

    updateSnake();
    updateFood();

    setTimeout(gameLoop, snakeSpeed);
  }

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        snakeDirection = 'up';
        break;
      case 'ArrowDown':
        snakeDirection = 'down';
        break;
      case 'ArrowLeft':
        snakeDirection = 'left';
        break;
      case 'ArrowRight':
        snakeDirection = 'right';
        break;
    }
  });

  generateFood();
  gameLoop();
});
