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
    sound: new Audio('./sounds/very-lush-and-swag-loop-74140.mp3'),
    soundGameOVer: new Audio('./sounds/mixkit-retro-arcade-game-over-470.wav'),



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
        this.sound.loop = true,
            this.sound.play()
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

    createObstacles() {
        let posX = this.randomPosition()
        this.obstacles.push(
            new Obstacle(this.ctx, posX, 0, 100, 20, 60, this.canvasSize),
        )
    },

    createInitialObstacles() {
        this.initialObstacles.push(
            new Obstacle(this.ctx, 240, 400, 100, 20, 60, this.canvasSize),
            new Obstacle(this.ctx, 50, 300, 100, 20, 60, this.canvasSize),

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
            new Coin(this.ctx, coinPosX, 0, 100, 20, 60, this.canvasSize),
        )

    },

    createBadEnemys() {
        let badPosX = this.randomPosition()
        this.badEnemys.push(
            new Enemy(this.ctx, badPosX + 5, 40, 100, 20, 60, this.canvasSize),
        )
        console.log(this.badEnemys)

    },

    randomPosition() {
        return Math.floor(Math.random() * this.canvasSize.w - 100)
    },

    start() {

        this.interval = setInterval(() => {

            this.clearAll()
            this.drawAll()
            this.scoreCount()
            this.livesCount()
            if (this.character.right) this.character.moveRight()
            if (this.character.left) this.character.moveLeft()


            this.framesCounter++
            if (this.framesCounter % 15 === 0) {
                this.createObstacles()
            }
            if (this.framesCounter % 40 === 0) {
                this.createCoins()
            }
            if (this.framesCounter % 35 === 0) {
                this.createBadObstacles()
            }
            if (this.framesCounter % 60 === 0) {
                this.createBadEnemys()
            }
            console.log(this.character.characterPos.y >= this.canvasSize.h)

            if (this.character.characterPos.y >= this.canvasSize.h) {
                this.gameOver()
            }
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

        this.coins.forEach(coin => coin.draw(this.framesCounter))
        this.coins.forEach(coin => coin.move())

        this.badEnemys.forEach(enemy => enemy.draw(this.framesCounter))
        this.badEnemys.forEach(enemy => enemy.move())

        this.character.draw(this.framesCounter)
        this.checkCollision()

    },

    checkCollision() {
        this.obstacles.forEach((element) => {
            if (
                this.character.characterPos.y + this.character.characterSize.h <= element.obstaclePos.y &&
                this.character.characterPos.y + this.character.characterSize.h + this.character.velCharacter.y >= element.obstaclePos.y &&
                this.character.characterPos.x + this.character.characterSize.w >= element.obstaclePos.x &&
                this.character.characterPos.x <= element.obstaclePos.x + element.obstacleSize.w

            ) {
                this.character.velCharacter.y *= -1
                this.character.imageInstance.rowsIndex = 1


            }
        })

        this.initialObstacles.forEach((element) => {
            if (
                this.character.characterPos.y + this.character.characterSize.h <= element.obstaclePos.y &&
                this.character.characterPos.y + this.character.characterSize.h + this.character.velCharacter.y >= element.obstaclePos.y &&
                this.character.characterPos.x + this.character.characterSize.w >= element.obstaclePos.x &&
                this.character.characterPos.x <= element.obstaclePos.x + element.obstacleSize.w

            ) {

                this.character.velCharacter.y *= -1
                this.character.imageInstance.rowsIndex = 1

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
            if (
                this.character.characterPos.y + this.character.characterSize.h <= element.obstaclePos.y &&
                this.character.characterPos.y + this.character.characterSize.h + this.character.velCharacter.y >= element.obstaclePos.y &&
                this.character.characterPos.x + this.character.characterSize.w >= element.obstaclePos.x &&
                this.character.characterPos.x <= element.obstaclePos.x + element.obstacleSize.w

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
        console.log('hola')

        document.onkeydown = event => {
            switch (event.key) {
                case 'r':

                    location.reload()
                    break;
            }

        }
    },


    gameOver() {
        clearInterval(this.interval)
        this.ctx.fillStyle = '#11131C'
        this.ctx.fillRect(0, 0, 500, 900)
        this.ctx.textAlign = "center",
            this.ctx.fillStyle = "white",
            this.ctx.font = "60px helvetica"
        this.ctx.fillText(
            "GAME OVER",
            this.canvasSize.w / 2,
            this.canvasSize.h / 2
        )

        this.sound.pause()
        this.soundGameOVer.play()


        this.ctx.textAlign = "center",
            this.ctx.fillStyle = "white",
            this.ctx.font = "20px helvetica"
        this.ctx.fillText(
            "PRESS R TO RESTART",
            this.canvasSize.w / 2,
            (this.canvasSize.h / 2) + 80
        )

        this.highScore()

    },

    scoreCount() {
        let stringScore = this.score.toString()

        const pruebita = document.querySelector("#prueba")

        pruebita.innerText = stringScore
    },


    livesCount() {

        let stringLives = this.lives.toString()

        const livescount = document.querySelector("#lives")
        livescount.innerText = stringLives

        if (this.lives === 0) {
            this.gameOver()
        }

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









