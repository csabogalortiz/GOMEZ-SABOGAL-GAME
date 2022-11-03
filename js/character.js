class Character {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.characterSize = {
            w: 80,
            h: 60
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
        this.characterImage = "./images/NinjasCharacterSprite-02.png"
        this.imageInstance = new Image()
        this.imageInstance.src = this.characterImage


        this.left = false
        this.right = false

        this.imageInstance.rows = 6;
        this.imageInstance.rowsIndex = 0;
        this.imageInstance.framesIndex = 0;


    }

    draw(framesCounter) {
        this.ctx.drawImage(

            this.imageInstance,
            this.imageInstance.rowsIndex * (this.imageInstance.width / this.imageInstance.rows) * this.imageInstance.framesIndex,
            0,
            this.imageInstance.width / this.imageInstance.rows,
            this.imageInstance.height,
            this.characterPos.x,
            this.characterPos.y,
            this.characterSize.w,
            this.characterSize.h,


        )
        this.animate(framesCounter)
        this.gameGravity();
        this.move()

    }

    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex >= this.imageInstance.rows) {
            this.imageInstance.framesIndex = 0
            this.imageInstance.rowsIndex = 0;
        }
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

                case 'r':

                    location.reload()
                    break;
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
        // animate()
    }

}








