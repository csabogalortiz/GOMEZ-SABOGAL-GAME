class Coin {
    constructor(ctx, coinPosX, coinPosY, coinSizeW, coinSizeH, coinSpeed, canvasSize) {
        this.ctx = ctx
        this.coinSize = {
            w: 50,
            h: 50
        }

        this.coinPos = {
            x: coinPosX,
            y: coinPosY
        }

        this.coinSpeed = coinSpeed
        this.canvasSize = canvasSize

        this.coinImage = "./images/stars.png"
        this.imageInstance = undefined

        this.init()

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.coinImage
        this.imageInstance.frames = 5;
        this.imageInstance.framesIndex = 0;
    }

    draw(framesCounter) {

        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * (this.imageInstance.width / this.imageInstance.frames),
            0,
            this.imageInstance.width / this.imageInstance.frames,
            this.imageInstance.height,
            this.coinPos.x,
            this.coinPos.y,
            this.coinSize.w,
            this.coinSize.h
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
        this.coinPos.y += 5
    }
}