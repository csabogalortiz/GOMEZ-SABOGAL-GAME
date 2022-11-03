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

        this.enemyImage = "./images/Suriken.png"
        this.imageInstance = undefined


        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.enemyImage
        this.imageInstance.frames = 8;
        this.imageInstance.framesIndex = 0;
    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * (this.imageInstance.width / this.imageInstance.frames),
            0,
            this.imageInstance.width / this.imageInstance.frames,
            this.imageInstance.height,
            this.enemyPos.x,
            this.enemyPos.y,
            this.enemySize.w,
            this.enemySize.h
        )

        this.animate(framesCounter)
    }

    animate(framesCounter) {

        if (framesCounter % 2 == 0) {
            this.imageInstance.framesIndex++;
        }

        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0;
        }
    }

    move() {
        this.enemyPos.y += 5
    }
}