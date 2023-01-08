const GRID_SIZE = 21

export function getRandomGridPosition(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function getRandomRockGridPosition(numberOfRocks){
    let rocks = []
    let rock = {}

    for (let i = 0; i < numberOfRocks; i++){
        rock = {
            x: Math.floor(Math.random() * GRID_SIZE) + 1,
            y: Math.floor(Math.random() * GRID_SIZE) + 1
        }
        rocks.push(rock);
    }
    return rocks
}

export function outsideGrid(position){
    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
    )
}