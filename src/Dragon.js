var Dragon = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/dragon-c.png');
        animation.setDelayPerUnit(0.5);
        movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
    },

    update: function (dt) {
        var pos = this.getPosition();
        if (pos.x >= -200) {
            this.setPosition(new cc.Point(pos.x - 5, pos.y));
        } else if (pos.x < -200) {
            this.setPosition(new cc.Point(2300, pos.y));
        }
    }
});