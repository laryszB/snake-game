import {getRandomRockGridPosition} from "./grid.js";

const numberOfRocks = 4;

export let rocks = getRandomRockGridPosition(numberOfRocks);


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