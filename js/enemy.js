class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemySizeW, enemySizeH, enemySpeed, canvasSize) {
        this.ctx = ctx
        this.enemySize = {
            w: 50,
            h: 50
        }

        this.enemyPos = {
            x: enemyPosX,
            y: enemyPosY

        }

        this.enemySpeed = enemySpeed
        this.canvasSize = canvasSize

        this.enemyImage = "./images/bad.png"
        this.imageInstance = undefined
        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.enemyImage
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.enemyPos.x,
            this.enemyPos.y,
            this.enemySize.w,
            this.enemySize.h
        )
    }

    move() {
        this.enemyPos.y += 5
    }
}