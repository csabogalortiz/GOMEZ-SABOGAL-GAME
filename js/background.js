class Background {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.backgroundSize = {
            w: 500,
            h: 900
        }
        this.backgroundPos = {
            x: 0,
            y: 0
        }
        this.backgroundImage = "./images/NinjaGameBackground.png"
        this.imageInstance = undefined

        this.velY = 3

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.backgroundImage
    }


    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.backgroundPos.x,
            this.backgroundPos.y,
            this.backgroundSize.w,
            this.backgroundSize.h),

            this.ctx.drawImage(
                this.imageInstance,
                this.backgroundPos.x,
                this.backgroundPos.y - this.backgroundSize.h,
                this.backgroundSize.w,
                this.backgroundSize.h
            )
        this.move()
    }

    move() {
        if (this.backgroundPos.y >= this.backgroundSize.h) {
            this.backgroundPos.y = 0;
        }
        this.backgroundPos.y += this.velY;

    }


}

// 