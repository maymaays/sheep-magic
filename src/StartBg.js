var StartBg = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile('res/images/gamestart1.jpg');
        animation.addSpriteFrameWithFile('res/images/gamestart2.jpg');
        animation.setDelayPerUnit(0.5);
        var movingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(movingAction);
        this.addKeyboardHandlers();
    },
    
        start : function () {
		this.runAction( cc.FadeTo.create(1.0, 0));
	},

    addKeyboardHandlers: function () {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                self.onKeyDown(keyCode, event);
            }
        }, this);
    },

    onKeyDown: function (keyCode, event) {
        if (keyCode == cc.KEY.space) {
            this.start();
            StartBg.status = 1;
            console.log(StartBg.status);
        } else if (keyCode == cc.KEY.enter) {
            this.start();
            StartBg.status = 2;
        }
    },

    onKeyUp: function (keyCode, event) {},

});

StartBg.status = 0;