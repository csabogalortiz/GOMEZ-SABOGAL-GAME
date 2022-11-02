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
        this.left = false
        this.right = false

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
                    this.right = true

                    break;
                case 'ArrowLeft':
                    this.left = true
                    // this.characterPos.x -= 50

                    break;
                // case 'ArrowUp':
                //     this.characterPos.y -= 50
                //     break;
            }

            document.onkeyup = event => {
                switch (event.key) {
                    case 'ArrowRight':
                        this.right = false
                        // return false
                        break;
                    case 'ArrowLeft':
                        this.left = false
                        // this.characterPos.x -= 50

                        break;
                }

            }
        }
    }

    moveLeft() {
        this.characterPos.x -= 20
    }

    moveRight() {
        this.characterPos.x += 20
    }

    gameGravity() {

        this.velCharacter.y += this.gravity
        this.characterPos.y += this.velCharacter.y
    }

}








