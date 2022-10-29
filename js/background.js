class Background {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.backgroundSize = {
            w: 500,
            h: 700
        }
        this.backgroundPos = {
            x: 0,
            y: 0
        }
        this.backgroundImage = "./images/paper.jpeg"
        this.imageInstance = undefined

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
                this.backgroundPos.y + this.backgroundSize.h,
                this.backgroundSize.w,
                this.backgroundSize.h
            )
        // this.move()
    }
}


// move() {
//     if (this.posY <= -this.width) {
//         this.posY = 0;
//     }
//     this.posY -= this.velY;
// }
