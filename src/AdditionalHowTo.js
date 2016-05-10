var AdditionalHowTo = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/addhow2.jpg');
        animation.setDelayPerUnit(0.5);
        var movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
    }
});