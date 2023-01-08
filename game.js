import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, SNAKE_SPEED} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { draw as drawRock, update as updateRock } from './rock.js'
import { outsideGrid} from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')

const numberOfRocks = 4;


function main(currentTime){

    if(gameOver){
        if(confirm('Przegrałeś. Naciśnij ok by zagrać ponownie')){
            window.location = ''
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime


    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    checkDeath();
    updateRock();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawRock(gameBoard);


}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


