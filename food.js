import {onSnake, expandSnake} from "./snake.js";

import {getRandomGridPosition} from "./grid.js";

export let snakeSpeed = 5;

let food = getRandomFoodPosition()
let food2 = getRandomFoodPosition()

const EXPANSION_RATE = 1

export let score = 0;

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        score++
        snakeSpeed += 0.5
        updateScore()
        food = getRandomFoodPosition()

    }
    if(onSnake(food2)){
        expandSnake(EXPANSION_RATE)
        score += 2
        snakeSpeed++
        updateScore()
        food2 = getRandomFoodPosition()
    }
}

export function draw(gameBoard){

        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

        const foodElement2 = document.createElement('div')
        foodElement2.style.gridRowStart = food2.y
        foodElement2.style.gridColumnStart = food2.x
        foodElement2.classList.add('food2')
        gameBoard.appendChild(foodElement2)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition
}

function updateScore(){
    document.getElementById("score").innerHTML = "Wynik: " + score
}