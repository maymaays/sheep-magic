var Arrow = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.vy = -0.001;
        this.started = true;
    },

    createAnimals: function (i) {

        if (i == 1) {  
            this.initWithFile('res/images/owl.png');
        } else if (i == 2) {
            this.initWithFile('res/images/fox.png');
        } else if (i == 3) {  
            this.initWithFile('res/images/mk.png');
        } else if (i == 4) {
            this.initWithFile('res/images/raindear.png');
        } else if (i == 5) {
            this.initWithFile('res/images/duck.png');
        } else if (i == 6) {
            this.initWithFile('res/images/bee.png');
        } else if (i == 7) {
            this.initWithFile('res/images/fox-a.png');
        }
    },

    randomPositionOfY: function () {
        return Math.ceil(Math.random() * 5);
    },

    position: function () {

        this.setPosition(new cc.Point(200 * (this.randomPositionOfX()),
            1000 + (this.randomPositionOfY() * Math.random() * 200)));
    },

    randomPositionOfX: function () {
        return Math.ceil(Math.random() * 8);
    },

    update: function (dt) {
        if (this.started) {
            var pos = this.getPosition();
            this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
            this.vy -= 0.008;
        }
    },

    start: function () {
        this.started = true;
    },

    speedUp: function () {
        this.vy += 0.01;
    }

});