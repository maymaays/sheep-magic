var Arrow = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.random();
        this.position();
        this.started = true;
        this.vy = -0.01;
    },

    random: function () {

        this.number = Math.ceil(Math.random() * 9);
        if (this.number == 1) {            
            this.initWithFile('res/images/penguin.png');
        } else if (this.number == 2) {            
            this.initWithFile('res/images/bear.png');
        } else if (this.number == 3) {
            this.initWithFile('res/images/dog.png');
        } else if (this.number == 4) {
            this.initWithFile('res/images/seal.png');
        } else if (this.number == 5) {
            this.initWithFile('res/images/panda.png');
        } else if (this.number == 6) {
            this.initWithFile('res/images/raindear.png');
        } else if (this.number == 7) {
            this.initWithFile('res/images/fox.png');
        } else if (this.number == 8) {
            this.initWithFile('res/images/dragon-c.png');
        }
    },

    randomPositionOfX: function () {
        return Math.ceil(Math.random() * 3);
    },

    randomPositionOfY: function () {
        return Math.ceil(Math.random() * 2);
    },

    position: function () {
        this.setPosition(new cc.Point(100 + (this.randomPositionOfX() * Math.random() * 300),
            800 + (this.randomPositionOfY() * Math.random() * 300)));
    },
    
    update: function (dt) {
        var pos = this.getPosition();
        if (this.started) {
            this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
            this.vy -= 0.01;
        }
    },

    start: function () {
        this.started = true;
    },

    velocity: function () {
        this.vy += 0.01;
    }

});
