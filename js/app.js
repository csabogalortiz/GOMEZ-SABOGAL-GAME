const app = {
    appName: 'GAME GAME',
    version: '1.0.0',
    license: undefined,
    author: 'Juliana Gomez & Catalina Sabogal',
    description: 'Final Project',
    ctx: undefined,
    // obstacles: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,
    background: undefined,
    character: undefined,

    init() {
        console.log('hola')
        this.setDimensions()
        this.setContext()
        // this.createObstacles()
        this.createCharacter()
        // this.setEventHandlers()
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

    // drawSquare() {
    //     console.log('hola4')
    //     this.ctx.fillStyle = '#adbae3'
    //     this.ctx.fillRect(0, 0, 500, 800)
    // },

    start() {

        setInterval(() => {
            this.clearAll()
            this.character.draw()
            // this.drawSquare()
            this.drawAll()
            this.framesCounter++
            // if (this.framesCounter % 60 === 0) {
            //     this.createObstacles()
            // }
        }, 50)
    },

    // createObstacles() {
    //     this.obstacles.push(
    //         new Obstacle(this.ctx, 100, 0, 200, 26, 5, this.canvasSize),
    //         new Obstacle(this.ctx, 250, 100, 60, 30, 14, this.canvasSize),
    //         new Obstacle(this.ctx, 300, 200, 60, 30, 14, this.canvasSize),

    //     )
    // },

    // createCharacter() {
    //     this.imageInstance = new Image()
    //     this.imageInstance.src = this.character.image
    // },



    // setEventHandlers() {
    //     document.onkeydown = event => {
    //         switch (event.key) {
    //             case 'ArrowRight':
    //                 this.carDetails.pos.x += 10
    //                 break;
    //             case 'ArrowLeft':
    //                 this.carDetails.pos.x -= 10
    //                 break;
    //         }
    //     }
    // },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        console.log('hola1')
        this.createCharacter()
        this.drawSquare()
        // this.obstacles.forEach(obstacle => obstacle.draw())
        // this.obstacles.forEach(obstacle => obstacle.move())
    },

}



