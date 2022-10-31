class Character {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.characterSize = {
            w: 30,
            h: 30
        }
        this.characterPos = {
            x: 240,
            y: this.canvasSize.h - this.characterSize.h - 80
        }
        // this.posFloor = 100
        
        this.velCharacter = {
            x: 10,
            y: 20
        } 
        this.gravity = 1
        
        // this.characterPhysics = { gravity: .4 }
        this.characterImage = "./images/ball.png"
        this.imageInstance = undefined
        this.init()
    
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.characterImage
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.characterPos.x,
            this.characterPos.y,
            this.characterSize.w,
            this.characterSize.h
        )
        this.gameGravity();
        this.move()
    }

    move() {
        this.setEventHandlers()
        
    }

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowRight':
                    this.characterPos.x += 50
                    break;
                case 'ArrowLeft':
                    this.characterPos.x -= 50
                    break;
                case 'ArrowUp':
                    this.characterPos.y -= 50
                    break;
            }
        }
    }

    gameGravity() {
        if (this.characterPos.y >= this.canvasSize.h - this.characterSize.h) {
            this.velCharacter.y *= -1
        }
        this.velCharacter.y += this.gravity
        this.characterPos.y += this.velCharacter.y
    }
}

    // Character Jump


    // if (this.characterPos.y >= this.canvasSize.h - this.characterSize.h) {
    //     this.characterSpeed.y *= -1
    // }

    // if (this.characterPos.x >= this.canvasSize.w - this.characterSize.w) {
    //     this.characterSpeed.x *= -1
    // }

    // this.characterPos.x += this.characterSpeed.x
    // this.characterSpeed.y += this.characterPhysics.gravity
    // this.characterPos.y += this.characterSpeed.y

      
    // }





