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

    }

    draw() {
        this.ctx.fillStyle = 'purple'

        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        this.obstaclePos.y += 0
    }

}