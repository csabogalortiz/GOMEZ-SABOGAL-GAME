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
            y: this.canvasSize.h - this.characterSize.h - 600
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
                    // this.moveleft ()
                    this.characterPos.x -= 50
                    break;
                case 'ArrowUp':
                    this.characterPos.y -= 50
                    break;
            }
        }



    }
    // moveleft() {
    //     this.characterPos.x -= 50
    // }

    gameGravity() {

        this.velCharacter.y += this.gravity
        this.characterPos.y += this.velCharacter.y
    }

}







