var HowToPlay = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/howto.jpg');
        animation.addSpriteFrameWithFile('res/images/howto1.jpg');
        animation.setDelayPerUnit(0.5);
        var movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
    }
});