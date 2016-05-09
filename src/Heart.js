var Heart = cc.Sprite.extend({

    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/alive1.jpg');
        animation.addSpriteFrameWithFile('res/images/alive2.jpg');
        animation.setDelayPerUnit(0.5);
        var movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
    },

    heartposition: function () {
        this.setPosition(new cc.Point(250, 900));
    }
});

Heart.HEARTSTATUS = true;