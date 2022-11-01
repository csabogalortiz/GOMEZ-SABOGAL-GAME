const app = {
    appName: 'GAME GAME',
    version: '1.0.0',
    license: undefined,
    author: 'Juliana Gomez & Catalina Sabogal',
    description: 'Final Project',
    ctx: undefined,
    obstacles: [],
    initialObstacles: [],
    coins: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,
    character: undefined,
    background: undefined,
    score: 0,



    init() {

        this.setDimensions()
        this.setContext()
        this.createBackground()
        this.createObstacles()
        this.createCharacter()
        this.createInitialObstacles()
        this.createCoins()
        this.scoreCount()
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
        let posX = this.randomPosition()
        // console.log(posX)
        this.obstacles.push(
            // new Obstacle(this.ctx, 100, 300, 150, 40, 200, 26, 0, this.canvasSize),
            // new Obstacle(this.ctx, posX, 600, 100, 20, 60, this.canvasSize),
            new Obstacle(this.ctx, posX, 0, 100, 20, 60, this.canvasSize),
        )
    },

    createInitialObstacles() {
        this.initialObstacles.push(
            new Obstacle(this.ctx, 240, 400, 100, 20, 60, this.canvasSize),
            new Obstacle(this.ctx, 50, 300, 100, 20, 60, this.canvasSize),
            // new Obstacle(this.ctx, 100, 200, 400, 20, 60, this.canvasSize),

        )

    },

    createCoins() {

        // console.log('posCoinssss', this.coinPosX.length)
        let coinPosX = this.randomPosition()
        this.coins.push(
            // new Obstacle(this.ctx, 100, 300, 150, 40, 200, 26, 0, this.canvasSize),
            // new Obstacle(this.ctx, posX, 600, 100, 20, 60, this.canvasSize),
            new Coin(this.ctx, coinPosX, 0, 100, 20, 60, this.canvasSize),
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
            this.scoreCount()
            this.framesCounter++
            if (this.framesCounter % 20 === 0) {
                this.createObstacles()

            }
            if (this.framesCounter % 70 === 0) {
                this.createCoins()
            }
        }, 50)
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.obstacles = this.obstacles.filter(element => element.obstaclePos.x >= 0)
        // this.coins = this.coins.filter(coin => coin.coinPos.x <= this.canvasSize.w)
    },

    drawAll() {
        // console.log('hola1')
        this.background.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.obstacles.forEach(obstacle => obstacle.move())

        this.initialObstacles.forEach(obstacle => obstacle.draw())
        this.initialObstacles.forEach(obstacle => obstacle.move())

        this.coins.forEach(coin => coin.draw())
        this.coins.forEach(coin => coin.move())
        this.character.draw()
        this.checkCollision()

    },

    // scoreCounter() {
    //     let score = 0

    // },

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


        this.coins.forEach((coin) => {
            if (this.character.characterPos.y + this.character.characterSize.h > coin.coinPos.y &&
                this.character.characterPos.y < coin.coinPos.y + coin.coinSize.h &&
                this.character.characterPos.x + this.character.characterSize.w > coin.coinPos.x &&
                this.character.characterPos.x < coin.coinPos.x + coin.coinSize.w

            ) {

                let collidedCoin = this.coins.indexOf(coin)
                this.coins.splice(collidedCoin, 1)

                this.score++


                // console.log(document.querySelector("#prueba"))
                // document.querySelector("#prueba").innerHTML


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
        // console.log('SOY LA PELOTITA', this.character.characterPos.y)
        if (this.character.characterPos.y > 890) {

            alert('ALERTA')
        }

    },

    scoreCount() {
        let stringScore = this.score.toString()

        const pruebita = document.querySelector("#prueba")
        console.log(`el score es ${pruebita.innerText}`)
        pruebita.innerText = stringScore
    }


}












