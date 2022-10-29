class Character {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.characterSize = {
            w: 200,
            h: 200
        }
        this.characterPos = {
            x: 200,
            y: 500
        }
        // this.characterSpeed = characterSpeed
        this.characterImage = "./images/ball.png"
        this.imageInstance = undefined
        this.canvasSize = canvasSize
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
    // Character Jump 
    // move() {
    //     this.characterSpeed += 0.2
    //     characterPosY += characterSpeed;
    // }

}

