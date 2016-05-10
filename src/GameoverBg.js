var GameoverBg = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/gameover1.jpg');
        animation.addSpriteFrameWithFile('res/images/gameover3.jpg');
        animation.setDelayPerUnit(0.5);
        var movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
    },

    end: function () {
        this.runAction(cc.FadeOut.create(0.8, 0));
    }
});