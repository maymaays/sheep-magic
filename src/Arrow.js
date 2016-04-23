var Arrow = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.random();
        this.started = true;
        this.vy = -0.01;
    },

    random: function () {
        this.number = Math.ceil(Math.random() * 4);
        if (this.number == 1) {            
            this.initWithFile('res/images/arrow-left.png');
        } else if (this.number == 2) {            
            this.initWithFile('res/images/arrow-right.png');
        } else if (this.number == 3) {
            this.initWithFile('res/images/arrow-up.png');
        } else {
            this.initWithFile('res/images/arrow-down.png');
        }
    },

    update: function (dt) {
        var pos = this.getPosition();
        if (this.started) {
            this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
            this.vy -= 0.01;
        } else if (!this.started) {
            
        }
    },

    start: function () {
        this.started = true;
    }

});
