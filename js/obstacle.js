class Obstacle {
    constructor(ctx, obstaclePosX, obstaclePosY, obstacleSizeW, obstacleSizeH, obstacleSpeed, canvasSize) {
        this.ctx = ctx
        this.obstacleSize = {
            w: obstacleSizeW,
            h: obstacleSizeH
        }

        this.obstaclePos = {

            x: obstaclePosX,
            y: obstaclePosY

        }

        this.obstacleSpeed = obstacleSpeed
        this.canvasSize = canvasSize

        this.obstacleImage = "./images/Obstaculos.png"
        this.imageInstance = undefined
        this.init()

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.obstacleImage
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.obstaclePos.x,
            this.obstaclePos.y,
            this.obstacleSize.w,
            this.obstacleSize.h
        )
    }
    // tiene que quedar en cero para que no empiecen a bajar aleatoriamente
    move() {
        this.obstaclePos.y += 5
    }

}