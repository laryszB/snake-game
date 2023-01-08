import {getRandomRockGridPosition} from "./grid.js";
import {onSnake} from "./snake.js";

const numberOfRocks = 4;

let rocks = getRandomRockGridPosition(numberOfRocks);


export function draw(gameBoard){
    rocks.forEach(rock =>{
        const rockElement = document.createElement('div')
        rockElement.style.gridRowStart = rock.y
        rockElement.style.gridColumnStart = rock.x
        rockElement.classList.add('rock')
        gameBoard.appendChild(rockElement)
        }
    )
}

export function update(){
    if(onSnake(rocks)){
        alert("trfiłeś na przeszkodę")
    }
}