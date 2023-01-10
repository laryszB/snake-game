import {
    update as updateSnake,
    draw as drawSnake,
    getSnakeHead,
    snakeIntersection,
    onSnake
} from './snake.js'
import { update as updateFood, draw as drawFood, snakeSpeed, score } from './food.js'
import { draw as drawRock, rocks } from './rock.js'
import { outsideGrid} from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
let paused = false;
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if(gameOver){
        saveNickAndScore()
        if(confirm('Przegrałeś. Naciśnij ok by zagrać ponownie')){
            window.location = ''
        }
        return
    }

    if(!paused)window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime


    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawRock(gameBoard);

}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() || onSnake(rocks)
}

function togglePause()
{
    if (!paused)
    {
        paused = true;
    } else if (paused)
    {
        paused= false;
        window.requestAnimationFrame(main)
    }

}

window.addEventListener('keydown', function (e) {
    let key = e.key;
    if (key === 'p')// p key
    {
        togglePause();
    }
});

function saveNickAndScore(){
    let nick = prompt("Przegrałeś, wprowadź swój nick");
    localStorage.setItem(nick, score)

    console.log(localStorage.key(0))
    console.log(localStorage.getItem(localStorage.key(0)))

    let scoreBoard = document.getElementById("score-board")
    for (let i = 0; i < localStorage.length; i++){
        let player = document.createElement("p");
        player.classList.add("player")
        player.innerHTML = localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i))
        scoreBoard.appendChild(player)
    }
}


