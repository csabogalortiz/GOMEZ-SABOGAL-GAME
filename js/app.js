const app = {
    appName: 'GAME GAME',
    version: '1.0.0',
    license: undefined,
    author: 'Juliana Gomez & Catalina Sabogal',
    description: 'Final Project',
    ctx: undefined,
    obstacles: [],
    initialObstacles: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,
    character: undefined,
    background: undefined,
    score: undefined,


    init() {
        console.log('hola')
        this.setDimensions()
        this.setContext()
        this.createBackground()
        this.createObstacles()
        this.createCharacter()
        this.createInitialObstacles()

        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 900,
        }
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },

    createCharacter() {
        this.character = new Character(this.ctx, this.canvasSize)
    },

    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize)
    },

    // constructor(ctx, obstaclePosX, obstaclePosY, obstacleSizeW, obstacleSizeH, obstacleSpeed, canvasSize) {
    createObstacles() {
        console.log(this.obstacles.length)
        let posX = this.randomPosition()
        console.log(posX)
        this.obstacles.push(
            // new Obstacle(this.ctx, 100, 300, 150, 40, 200, 26, 0, this.canvasSize),
            // new Obstacle(this.ctx, posX, 600, 100, 20, 60, this.canvasSize),
            new Obstacle(this.ctx, posX, 0, 100, 20, 60, this.canvasSize),
        )
    },

    createInitialObstacles() {
        console.log('Maria juliana')
        this.initialObstacles.push(
            new Obstacle(this.ctx, 240, 400, 100, 20, 60, this.canvasSize),
            new Obstacle(this.ctx, 50, 300, 100, 20, 60, this.canvasSize),
            // new Obstacle(this.ctx, 100, 200, 400, 20, 60, this.canvasSize),

        )

    },

    randomPosition() {
        return Math.floor(Math.random() * this.canvasSize.w - 100)
    },

    start() {

        setInterval(() => {


            this.clearAll()
            this.gameOver()

            this.drawAll()
            this.framesCounter++
            if (this.framesCounter % 20 === 0) {
                this.createObstacles()
            }
        }, 50)
    },


    /* moveAll() {
        // console.log('hola7')
        this.character.move()
    }, */

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.obstacles = this.obstacles.filter(element => element.obstaclePos.x >= 0)
    },

    drawAll() {
        // console.log('hola1')
        this.background.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.obstacles.forEach(obstacle => obstacle.move())

        this.initialObstacles.forEach(obstacle => obstacle.draw())
        this.initialObstacles.forEach(obstacle => obstacle.move())

        this.character.draw()
        this.checkCollision()

    },


    checkCollision() {
        this.obstacles.forEach((element) => {
            if (this.character.characterPos.y + this.character.characterSize.h > element.obstaclePos.y &&
                this.character.characterPos.y < element.obstaclePos.y + element.obstacleSize.h &&
                this.character.characterPos.x + this.character.characterSize.w > element.obstaclePos.x &&
                this.character.characterPos.x < element.obstaclePos.x + element.obstacleSize.w

            ) {

                this.character.velCharacter.y *= -1

            }
        })

        this.initialObstacles.forEach((element) => {
            if (this.character.characterPos.y + this.character.characterSize.h > element.obstaclePos.y &&
                this.character.characterPos.y < element.obstaclePos.y + element.obstacleSize.h &&
                this.character.characterPos.x + this.character.characterSize.w > element.obstaclePos.x &&
                this.character.characterPos.x < element.obstaclePos.x + element.obstacleSize.w

            ) {

                this.character.velCharacter.y *= -1

            }
        })

        // this.framesCounter++

        // if (this.framesCounter % 50 === 0) {
        //     this.createObstacles()
        // }
        // this.character.characterPos.y = element.obstaclePos.y
        // element.obstaclePos.y += 5;
        // this.character.velCharacter.y -= 10
        // this.character.characterPos.y += this.character.velCharacter.y

        // console.log(element.obstaclePos.y)

    },

    gameOver() {
        console.log('SOY LA PELOTITA', this.character.characterPos.y)
        if (this.character.characterPos.y > 900) {
            console.log('Si sirve')
            alert('ALERTA')
        }

    }






    // doodlerY + doodlerSize < plat.yPos + plat.height &&
    // doodlerY + doodlerSize > plat.yPos &&

    // element.obstaclePos.y += 5;

    // this.obstacle.obstaclePos.y -= 5;
    // alert('ALERTA')
    // element.obstaclePos.y += 5;
    // this.character.characterPos.y -= 5;
    // this.character.characterPos.y += 5;

}



// doodlerY + doodlerSize < plat.yPos + plat.height &&








