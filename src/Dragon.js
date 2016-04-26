var Dragon = cc.Node.extend({
    ctor: function () {
        this._super();
        this.dragon = cc.Sprite.create('res/images/dragon-c.png');
        this.dragon.setPosition(new cc.Point(0, 0));
        this.addChild(this.dragon);  
    },
    
    update: function (dt) {
        var pos = this.getPosition();
        if (pos.x >= -150) {
            this.setPosition(new cc.Point(pos.x, pos.y));
        } else if (pos.x < -150) {
            this.setPosition(new cc.Point(pos.x, pos.y));
        }
    }
});
