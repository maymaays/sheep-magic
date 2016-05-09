var Heart = cc.Sprite.extend({

    ctor: function () {
        this._super();
        this.initWithFile('res/images/heart1.png');
    },


    update: function () {},

    positionOfHeart: function (i) {
        if (i == 1) {
            this.setPosition(new cc.Point(150, 900));
        } else if (i == 2) {
            this.setPosition(new cc.Point(250, 900));
        } else if (i == 3) {
            this.setPosition(new cc.Point(350, 900));
        }
    },

    setHearTexture: function () {
        this.setTexture('res/images/heart1.png');
    },
    
    setDeadTexture: function () {
        this.setTexture('res/images/heartwithdead.png');
    }

});

Heart.NUMHEART = 4;