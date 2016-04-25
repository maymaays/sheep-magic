var Arrow = cc.Sprite.extend({
    ctor: function () {
        this._super();

        this.animals = [];
        for (var i = 1; i < 9; i++) {
            this.createAnimals();
        }
        this.vy = -0.01;
        this.started = true;

    },

    createAnimals: function () {

        if (i == 1) {  
            this.initWithFile('res/images/penguin.png');
        } else if (i == 2) {
            this.initWithFile('res/images/panda.png');
        } else if (i == 3) {  
            this.initWithFile('res/images/bear.png');
        } else if (i == 4) {
            this.initWithFile('res/images/raindear.png');
        } else if (i == 5) {
            this.initWithFile('res/images/dog.png');
        } else if (i == 6) {
            this.initWithFile('res/images/fox.png');
        } else if (i == 7) {
            this.initWithFile('res/images/seal.png');
        } else if (i == 8) {
            this.initWithFile('res/images/panda.png');
        }
        this.addChild(this.animal);
        this.animals.push(this.animals);

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
        if (this.started) {
            var pos = this.getPosition();
            this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
            this.vy -= 0.04;
        }
    },

    start: function () {
        this.started = true;
    },

    speedUp: function () {
        this.vy += 0.01;
    }

});