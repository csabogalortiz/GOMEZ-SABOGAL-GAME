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

        this.coinImage = "./images/coin.png"
        this.imageInstance = undefined
        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.coinImage
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.coinPos.x,
            this.coinPos.y,
            this.coinSize.w,
            this.coinSize.h
        )
    }

    // tiene que quedar en cero para que no empiecen a bajar aleatoriamente
    move() {
        this.coinPos.y += 5
    }
}


// *************

