var GameLayer = cc.LayerColor.extend({

    init: function () {

        this._super();
        this.setPosition(new cc.Point(0, 0));

        this.bg = new Background();
        this.bg.setPosition(new cc.Point(450, 400));
        this.addChild(this.bg);

        this.rabbit = new Rabbit();
        this.rabbit.setPosition(new cc.Point(500, 180));
        this.addChild(this.rabbit, 1);
        this.rabbit.scheduleUpdate();

        this.heart = new Heart();
        this.heart.setPosition(new cc.Point(850, 650));
        this.addChild(this.heart);

        this.arrows = [];
        for (var i = 0; i < GameLayer.NUMARROW; i++) {
            this.arrows.push(new Arrow());
            this.arrows[i].setPosition(new cc.Point(100 + (Math.random() * 800),
                700 + Math.random() * 300));
            if (i >= 1) {
                if (this.arrows[i].getPositionX <= this.arrows[i - 1].getPositionX + 100 &&
                    this.arrows[i].getPositionX >= this.arrows[i - 1].getPositionX - 100) {
                    this.arrows[i].setPosition(new cc.Point(100 + (Math.random() * 800),
                        700 + Math.random() * 300));
                }
            }

            this.addChild(this.arrows[i]);
            this.arrows[i].scheduleUpdate();
        }

        this.scheduleUpdate();

        for (var i = 0; i < this.arrows.length; i++) {
            this.arrows[i].scheduleUpdate();
        }

        this.addKeyboardHandlers();
        return true;


    },

    createScoreLabel: function () {
        this.scoreLabel = cc.LabelTTF.create('0', 'Arial', 46);
        this.scoreLabel.setPosition(new cc.Point(850, 700));
        this.addChild(this.scoreLabel, 2);
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

        if (keyCode == cc.KEY.left) {
            for (var i = 0; i < this.arrows.length; i++) {
                if (this.arrows[i].number == 1) {
                    this.arrows[i].setOpacity(0);
                    break;
                }
            }
        } else if (keyCode == cc.KEY.right) {
            for (var i = 0; i < this.arrows.length; i++) {
                if (this.arrows[i].number == 2) {
                    this.arrows[i].setOpacity(0);
                    break;
                }
            }
        } else if (keyCode == cc.KEY.up) {
            for (var i = 0; i < this.arrows.length; i++) {
                if (this.arrows[i].number == 3) {
                    this.arrows[i].setOpacity(0);
                    break;
                }
            }
        } else if (keyCode == cc.KEY.down) {
            for (var i = 0; i < this.arrows.length; i++) {
                if (this.arrows[i].number == 4) {
                    this.arrows[i].setOpacity(0);
                    break;
                }
            }
        }
    },

    onKeyUp: function (keyCode, event) {},

    update: function () {
        for (var i = 0; i < this.arrows.length; i++) {
            var pos = this.arrows[i];
            if (pos.y <= -100) {
                this.arrows[i].vy = -0.5;
                this.arrows[i].setPosition(new cc.Point(100 + (Math.random() * 800),
                    700 + Math.random() * 300));
                this.arrows[i].setOpacity(255);
            }
        }
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild(layer);
    }
});

GameLayer.NUMARROW = 5;
