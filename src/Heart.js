var Heart = cc.Node.extend({
    ctor: function () {
        
        this._super();
        
        this.heart1 = cc.Sprite.create('res/images/heart1.png');
        this.heart1.setPosition(new cc.Point(0, 0));
        this.addChild(this.heart1);
        
        this.heart2 = cc.Sprite.create('res/images/heart1.png');
        this.heart2.setPosition(new cc.Point(100, 0));
        this.addChild(this.heart2);
        
        this.heart3 = cc.Sprite.create('res/images/heart1.png');
        this.heart3.setPosition(new cc.Point(200, 0));
        this.addChild(this.heart3);

    },
});