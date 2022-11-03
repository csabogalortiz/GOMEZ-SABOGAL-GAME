const app = {
    appName: 'GAME GAME',
    version: '1.0.0',
    license: undefined,
    author: 'Juliana Gomez & Catalina Sabogal',
    description: 'Final Project',
    ctx: undefined,
    obstacles: [],
    initialObstacles: [],
    badObstacles: [],
    badEnemys: [],
    coins: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,
    character: undefined,
    background: undefined,
    score: 0,
    lives: 3,
    interval: undefined,



    init() {
        this.savedHighScore()
        this.score = 0
        this.lives = 3
        this.setEventHandlers()
        this.setDimensions()
        this.setContext()
        this.createBackground()
        this.createObstacles()
        this.createCharacter()
        this.createBadObstacles()
        this.createBadEnemys()
        this.createInitialObstacles()
        this.createCoins()
        this.scoreCount()
        this.livesCount()
        this.gameOver()
        // this.restart()
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 800,
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

    createBadObstacles() {
        let posbX = this.randomPosition()
        this.badObstacles.push(
            new Obstacle(this.ctx, posbX, 0, 100, 20, 60, this.canvasSize),
        )
    },

    createCoins() {
        let coinPosX = this.randomPosition()
        this.coins.push(
            new Coin(this.ctx, coinPosX + 1, 0, 100, 20, 60, this.canvasSize),
        )

    },

    createBadEnemys() {
        let badPosX = this.randomPosition()
        this.badEnemys.push(
            new Enemy(this.ctx, badPosX + 5, 40, 100, 20, 60, this.canvasSize),
        )

    },

    randomPosition() {
        return Math.floor(Math.random() * this.canvasSize.w - 100)
    },

    start() {

        this.interval = setInterval(() => {

            this.clearAll()
            this.drawAll()
            // this.restart()
            this.scoreCount()
            this.livesCount()
            if (this.character.right) this.character.moveRight()
            if (this.character.left) this.character.moveLeft()


            this.framesCounter++
            if (this.framesCounter % 20 === 0) {
                this.createObstacles()
            }
            if (this.framesCounter % 70 === 0) {
                this.createCoins()
            }
            if (this.framesCounter % 80 === 0) {
                this.createBadObstacles()
            }
            if (this.framesCounter % 100 === 0) {
                this.createBadEnemys()
            }

            this.gameOver()
        }, 50)
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.obstacles = this.obstacles.filter(element => element.obstaclePos.x >= 0)
        this.badObstacles = this.badObstacles.filter(element => element.obstaclePos.x >= 0)
    },

    drawAll() {
        this.background.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.obstacles.forEach(obstacle => obstacle.move())

        this.initialObstacles.forEach(obstacle => obstacle.draw())
        this.initialObstacles.forEach(obstacle => obstacle.move())

        this.badObstacles.forEach(obstacle => obstacle.draw())
        this.badObstacles.forEach(obstacle => obstacle.move())

        this.coins.forEach(coin => coin.draw())
        this.coins.forEach(coin => coin.move())

        this.badEnemys.forEach(enemy => enemy.draw())
        this.badEnemys.forEach(enemy => enemy.move())

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

                // this.character.velCharacter.y *= -1
                if (this.character.velCharacter.y > 0) {
                    this.character.velCharacter.y *= -1

                }

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
            }
        })

        this.badObstacles.forEach((element) => {
            if (this.character.characterPos.y + this.character.characterSize.h > element.obstaclePos.y &&
                this.character.characterPos.y < element.obstaclePos.y + element.obstacleSize.h &&
                this.character.characterPos.x + this.character.characterSize.w > element.obstaclePos.x &&
                this.character.characterPos.x < element.obstaclePos.x + element.obstacleSize.w


            ) {
                this.character.velCharacter.y *= -1
                let collidedObstacle = this.badObstacles.indexOf(element)
                this.badObstacles.splice(collidedObstacle, 1)


            }
        })
        this.badEnemys.forEach((element) => {
            if (this.character.characterPos.y + this.character.characterSize.h > element.enemyPos.y &&
                this.character.characterPos.y < element.enemyPos.y + element.enemySize.h &&
                this.character.characterPos.x + this.character.characterSize.w > element.enemyPos.x &&
                this.character.characterPos.x < element.enemyPos.x + element.enemySize.w

            ) {

                let collidedEnemy = this.badEnemys.indexOf(element)
                this.badEnemys.splice(collidedEnemy, 1)
                this.lives--

            }
        })
    },

    setEventHandlers() {

        document.onkeyup = event => {

            // console.log(event.key)

            switch (event.key) {
                case 'r':
                    location.reload()
                    break;
            }

        }
    },


    gameOver() {
        console.log(this.character.characterPos.y)
        if (this.character.characterPos.y >= this.canvasSize.h) {
            clearInterval(this.interval)
            this.ctx.fillStyle = '#E9444D'
            this.ctx.fillRect(0, 0, 500, 900)
            this.ctx.textAlign = "center",
                this.ctx.fillStyle = "white",
                this.ctx.font = "60px helvetica"
            this.ctx.fillText(
                "GAME OVER",
                this.canvasSize.w / 2,
                this.canvasSize.h / 2
            )


            this.ctx.textAlign = "center",
                this.ctx.fillStyle = "white",
                this.ctx.font = "40px play"
            this.ctx.fillText(
                "Press r to restart",
                this.canvasSize.w / 2,
                (this.canvasSize.h / 2) + 80
            )

            this.highScore()




            // alert("alerta")
            // this.interval()
            // clearInterval(this.interval)


        }
    },

    scoreCount() {
        let stringScore = this.score.toString()

        const pruebita = document.querySelector("#prueba")

        pruebita.innerText = stringScore
    },


    livesCount() {

        let stringLives = this.lives.toString()

        const livescount = document.querySelector("#lives")
        // console.log(`tus vidas son ${livescount.innerText}`)
        livescount.innerText = stringLives


    },

    highScore() {
        localStorage.setItem('save', JSON.stringify(this.score));
    },

    savedHighScore() {
        let topScore = localStorage.getItem('save');
        const savedScore = document.querySelector("#highScore")
        savedScore.innerText = topScore


    },






}









