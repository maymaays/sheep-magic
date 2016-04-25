var Heart = cc.Node.extend({
    
    ctor: function () {
        this._super();
        this.positionOfX = 0;
        this.hearts = [];
        for (var i = 0; i < 3; i++) {
            this.createHeart();
        }
    },


    update: function () {},

    createHeart: function () {
        this.heart = cc.Sprite.create();
        this.heart.setPosition(this.positionOfX, 0);
        this.heart.initWithFile('res/images/heart1.png');
        this.addChild(this.heart);
        this.hearts.push(this.heart);
        this.positionOfX += 100;
    }
});