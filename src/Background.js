var Background = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.bg = cc.Sprite.create('res/images/sweet-candy-bg.jpg');
        this.bg.setPosition(new cc.Point(0, 0));
        this.addChild(this.bg);
    }
});