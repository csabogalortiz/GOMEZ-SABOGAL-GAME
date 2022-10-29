class Character {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.characterSize = {
            w: 100,
            h: 100
        }
        this.characterPos = {
            x: 200,
            y: 700
        }
        this.characterSpeed += 0.9;
        // this.characterPhysics = { gravity: .4 }
        this.characterImage = "./images/ball.png"
        this.imageInstance = undefined
        this.canvasSize = canvasSize
        this.move()
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
    }

    move() {
        console.log('chao')
        this.setEventHandlers()
        // this.jump 
        
    }

    setEventHandlers() {
        console.log('chao2')
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowRight':
                    this.characterPos.x += 50
                    break;
                case 'ArrowLeft':
                    this.characterPos.x -= 50
                    break;
            }
        }
    }

    jump() {
        characterPos.y += characterSpeed;
    }
}

    // Character Jump

//     if (this.characterPos.y < this.characterPos.y0) {   // Está saltando!
    //         this.characterPos.y += this.characterSpeed.y;
    //         this.characterSpeed.y += this.characterPhysics.gravity;
    //     } else {
    //         this.characterPos.y = this.characterPos.y0;
    //         this.characterSpeed.y = 1;
    //     }
    // }

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





