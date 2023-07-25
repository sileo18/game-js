const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = 1024;
const canvasHeight = 728;

class Sprite {
  constructor({ position, dimensions, velocity, color }) {
    this.position = position;
    this.velocity = velocity;
    this.dimensions = dimensions;
    this.color = color
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.dimensions.width,
      this.dimensions.height
    );
  }

  update() {

    //Lidanco com limites verticais do canva
    if (this.position.y + this.dimensions.height >= canvasHeight) {
      this.velocity.y =
        canvasHeight - (this.position.y + this.dimensions.height);
    } else {
      this.velocity.y += gravity;
    }
   

    //Lidando com limites horizontais do canva

    if (this.position.x + this.dimensions.width >= canvasWidth){
      this.position.x = 0
    }

    if (this.position.x + this.dimensions.width < 0 ){
      this.position.x = canvasWidth - this.dimensions.width 
      
    }

    this.position.x += this.velocity.x;

    this.position.y += this.velocity.y;

    this.draw();
  }
}

const validKeys = {
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  }
};


window.addEventListener("keydown", (e) => {
  let keys = e.key;

  switch (keys) {
    case "w":
      validKeys.w.pressed = true;

      break;
    case "s":
      validKeys.s.pressed = true;

      break;
    case "a":
      validKeys.a.pressed = true;

      break;
    case "d":
      validKeys.d.pressed = true;

      break;
    case "space":
      validKeys.space.pressed = true;

      break;
    
    case "ArrowUp":
      validKeysEnemy.ArrowUp.pressed = true

      break;    
    case "ArrowDown":
      validKeysEnemy.ArrowDown.pressed = true

      break;    
    case "ArrowLeft":
      validKeysEnemy.ArrowLeft.pressed = true

      break;    
    case "ArrowRight":
      validKeysEnemy.ArrowRight.pressed = true

      break;    
  }
});

window.addEventListener("keyup", (e) => {
  let keys = e.key;

  switch (keys) {
    case "w":
      validKeys.w.pressed = false;

      break;
    case "s":
      validKeys.s.pressed = false;

      break;
    case "a":
      validKeys.a.pressed = false;

      break;
    case "d":
      validKeys.d.pressed = false;

      break;
    case "space":
      validKeys.space.pressed = false;

      break;

      case "ArrowUp":
      validKeysEnemy.ArrowUp.pressed = false

      break;    
    case "ArrowDown":
      validKeysEnemy.ArrowDown.pressed = false

      break;    
    case "ArrowLeft":
      validKeysEnemy.ArrowLeft.pressed = false

      break;    
    case "ArrowRight":
      validKeysEnemy.ArrowRight.pressed = false

      break; 
  }
});

function handleControls() {

  const moveSpeed = 10;

  movementPlayer()
  movementEnemy()

  function movementPlayer() {
    playerOne.velocity.x = 0   
    

    if (validKeys.d.pressed === true) {
      playerOne.velocity.x = moveSpeed  
              
    }

    if (validKeys.a.pressed === true) {
      playerOne.velocity.x = -moveSpeed    
    }

    if (validKeys.w.pressed === true) {
      playerOne.velocity.y -= 3
      playerOne.position.y += playerOne.velocity.y
      validKeys.w.pressed === false          
    }
  }

  function movementEnemy() {

    enemyOne.velocity.x = 0
    
    if (validKeysEnemy.ArrowRight.pressed === true) {
      enemyOne.velocity.x = moveSpeed  
              
    }

    if (validKeysEnemy.ArrowLeft.pressed === true) {
      enemyOne.velocity.x = -moveSpeed    
    }

    if (validKeysEnemy.ArrowUp.pressed === true) {
      enemyOne.velocity.y -= 3
      enemyOne.position.y += enemyOne.velocity.y              
    }

  }
}

const validKeysEnemy = {
  ArrowUp: {
    pressed: false
  },
  ArrowDown: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  }  
}

let gravity = 0.6;

const enemyOne = new Sprite({
  position: {
    x: 200,
    y: 0,
  },
  dimensions: {
    width: 30,
    height: 50,
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: "red",
})

const playerOne = new Sprite({
  position: {
    x: 10,
    y: 0,
  },
  dimensions: {
    width: 30,
    height: 70,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "white",
});

animate();

function animate() {
  requestAnimationFrame(animate);

  handleControls()

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  playerOne.update();
  enemyOne.update();
}

console.log(playerOne);
