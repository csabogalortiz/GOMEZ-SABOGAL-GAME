class Character {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.characterSize = {
            w: 100,
            h: 100
        }
        this.characterPos = {
            x: 200,
            y: this.canvasSize.h - this.characterSize.h - 40
        }
        this.posFloor = 300
        
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
        // this.jump()
        
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

    // jump() {
    //     console.log('Holi')
    //     if (this.characterPos.y < this.posFloor) {  
    //         this.characterPos.y -= this.velCharacter.y;
    //         // this.velCharacter.y -= 10;
    //     // } else if ((this.characterPos.y = -1(this.characterSize.h + 10))) {      
    //     }
    // }
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





