
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Basic snake game setup
let snake = [{x: 200, y: 200}];
let direction = 'right';
let food = {x: 100, y: 100};
let score = 0;

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.forEach(part => {
        ctx.fillStyle = 'green';
        ctx.fillRect(part.x, part.y, 20, 20);
    });
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
}

function moveSnake() {
    let head = {...snake[0]};
    if (direction === 'right') head.x += 20;
    if (direction === 'left') head.x -= 20;
    if (direction === 'up') head.y -= 20;
    if (direction === 'down') head.y += 20;
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * 20,
            y: Math.floor(Math.random() * 20) * 20
        };
    } else {
        snake.pop();
    }
    drawSnake();
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') direction = 'right';
    if (e.key === 'ArrowLeft') direction = 'left';
    if (e.key === 'ArrowUp') direction = 'up';
    if (e.key === 'ArrowDown') direction = 'down';
});

setInterval(moveSnake, 200);
