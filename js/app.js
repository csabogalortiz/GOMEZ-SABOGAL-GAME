const app = {
    appName: 'GAME GAME',
    version: '1.0.0',
    license: undefined,
    author: 'Juliana Gomez & Catalina Sabogal',
    description: 'Final Project',
    ctx: undefined,
    obstacles: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,
    character: undefined,
    background: undefined,


    init() {
        console.log('hola')
        this.setDimensions()
        this.setContext()
        // this.createObstacles()
        this.createBackground()
        this.createObstacles()
        this.createCharacter()
        this.moveAll()
        this.start()
    },

    setContext() {
        console.log('hola2')
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    setDimensions() {
        console.log('hola3')
        this.canvasSize = {
            w: 500,
            h: 900,
        }
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },

    createCharacter() {
        console.log('hola5')
        this.character = new Character(this.ctx, this.canvasSize)
    },

    createBackground() {
        console.log('hola6')
        this.background = new Background(this.ctx, this.canvasSize)
    },

    createObstacles() {
        console.log('hola8')
        this.obstacles.push(
            new Obstacle(this.ctx, 100, 0, 200, 26, 5, this.canvasSize),
            new Obstacle(this.ctx, 250, 100, 60, 30, 14, this.canvasSize),
            new Obstacle(this.ctx, 300, 200, 60, 30, 14, this.canvasSize),
        )
    },

    start() {

        setInterval(() => {
            this.moveAll()
            this.clearAll()
            this.drawAll()
            this.framesCounter++
            if (this.framesCounter % 60 === 0) {
                this.createObstacles()
            }
        }, 50)
    },


    moveAll() {
        // console.log('hola7')
        this.character.move()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        // console.log('hola1')
        this.background.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.obstacles.forEach(obstacle => obstacle.move())
        this.character.draw()
    },

}



