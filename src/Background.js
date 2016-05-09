
var Background = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/sweet-candy-bg2.jpg');
        animation.addSpriteFrameWithFile('res/images/sweet-candy-bg3.jpg');
        animation.setDelayPerUnit(0.8);
        var movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
    },
});