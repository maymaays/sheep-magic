var Rabbit = cc.Node.extend({
    ctor: function () {
        this._super();
        this.rabbit = cc.Sprite.create('res/images/dragon.png');
        this.rabbit.setPosition(new cc.Point(0, 0));
        this.addChild(this.rabbit);
         
    },

    update: function (dt) {
        var pos = this.getPosition();
        console.log(this.getPositionX());
        if (pos.x >= -50) {
            this.setPosition(new cc.Point(pos.x - 2, pos.y));
        } else if (pos.x < -50) {
            this.setPosition(new cc.Point(1000, pos.y));
        }
    }
});
