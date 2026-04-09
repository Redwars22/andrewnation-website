# GameStorm

Uma game engine em JavaScript. Posteriormente será reescrita em TypeScript e serão adicionados novos recursos. Por enquanto, segue o código-fonte:

```js
const CONSTANTS = {
    KEYS: {
        UP: "ArrowUp",
        DOWN: "ArrowDown",
        LEFT: "ArrowLeft",
        RIGHT: "ArrowRight"
    }
};

const canvas = document.getElementById("game_canvas");
const context = canvas.getContext("2d");

const obj = {
    coord: { x: 0, y: 0 },
    size: { x: 150, y: 100 },
    speed: 200
};

document.addEventListener('keydown', function(event) {
    const key = event.code;
    
    switch(key) {
        case CONSTANTS.KEYS.UP:    obj.coord.y -= 10; break;
        case CONSTANTS.KEYS.DOWN:  obj.coord.y += 10; break;
        case CONSTANTS.KEYS.LEFT:  obj.coord.x -= 10; break;
        case CONSTANTS.KEYS.RIGHT: obj.coord.x += 10; break;
    }
});

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "green";
    context.fillRect(obj.coord.x, obj.coord.y, obj.size.x, obj.size.y); 
}

function update(dt) {
}

let lastTime = 0;

function gameLoop(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    update(deltaTime); 
    draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
```
