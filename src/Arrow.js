var Arrow = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.random();
        this.position();
        this.started = true;
        this.vy = -0.01;
    },

    random: function () {

        this.random = Math.ceil(Math.random() * 2);

        if (this.random == 1) {
            this.number = Math.ceil(Math.random() * 4);
            if (this.number == 1) {  
                /* arctic */
                this.initWithFile('res/images/penguin.png');
            } else if (this.number == 2) {
                this.initWithFile('res/images/panda.png');
            } else if (this.number == 3) {  
                /* arctic */
                this.initWithFile('res/images/bear.png');
            } else if (this.number == 4) {
                this.initWithFile('res/images/raindear.png');
            }

        } else if (this.random == 2) {

            this.number = Math.ceil(Math.random() * 4);
            if (this.number == 1) {
                /* arctic */
                this.initWithFile('res/images/dog.png');
            } else if (this.number == 2) {
                this.initWithFile('res/images/fox.png');
            } else if (this.number == 3) {
                /* arctic */
                this.initWithFile('res/images/seal.png');
            } else if (this.number == 4) {
                this.initWithFile('res/images/panda.png');
            }
        }
    },

    randomPositionOfX: function () {
        return Math.ceil(Math.random() * 4);
    },

    randomPositionOfY: function () {
        return Math.ceil(Math.random() * 2);
    },

    position: function () {
        this.setPosition(new cc.Point(200 + (this.randomPositionOfX() * Math.random() * 300),
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

    speedUp: function () {
        this.vy += 0.01;
    }

});