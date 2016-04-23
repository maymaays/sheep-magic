var Rabbit = cc.Node.extend({
    ctor: function () {
        this._super();
        this.dragon = cc.Sprite.create('res/images/dragon.png');
        this.dragon.setPosition(new cc.Point(0, 0));
        this.addChild(this.dragon);  
    },
    
    update: function (dt) {
        var pos = this.getPosition();
        if (pos.x >= -50) {
            this.setPosition(new cc.Point(pos.x - 2, pos.y));
        } else if (pos.x < -50) {
            this.setPosition(new cc.Point(1000, pos.y));
        }
    }
});
