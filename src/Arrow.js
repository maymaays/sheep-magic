var Arrow = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.random();
        this.started = true;
        this.vy = -0.1;
    },

    random: function () {
        this.random = Math.ceil(Math.random() * 4);  
        if (this.random == 1) {            
            this.initWithFile('res/images/arrow-left.png');
        } else if (this.random == 2) {            
            this.initWithFile('res/images/arrow-right.png');
        } else if (this.random == 3) {
            this.initWithFile('res/images/arrow-up.png');
        } else {
            this.initWithFile('res/images/arrow-down.png');
        }
    },

    update: function (dt) {
        var pos = this.getPosition();
        if (this.started) {
            this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
            this.vy -= 0.1;
        } else if (!this.started) {
            
        }
    },

    start: function () {
        this.started = true;
    },
    
    remove: function () {
       this.started = false; 
    }

});
