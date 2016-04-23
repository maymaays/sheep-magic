var GameLayer = cc.LayerColor.extend({

    init: function () {

        this._super();
        this.setPosition(new cc.Point(0, 0));
        this.createBackground();
        this.createDragon();
        this.createLife
        this.heart = new Heart();
        this.heart.setPosition(new cc.Point(100, 700));
        this.addChild(this.heart);
        this.arrows = [];
        this.createAnimal();
        this.scheduleUpdate();
        this.addKeyboardHandlers();
        return true;

    },

    createAnimal: function () {
        for (var i = 0; i < GameLayer.NUMARROW; i++) {
            this.arrows.push(new Arrow());
            this.arrows[i].position();
            this.addChild(this.arrows[i]);
            this.arrows[i].scheduleUpdate();
        }
    },

    createBackground: function () {
        this.bg = new Background();
        this.bg.setPosition(new cc.Point(450, 400));
        this.addChild(this.bg);
    },

    createDragon: function () {
        this.rabbit = new Rabbit();
        this.rabbit.setPosition(new cc.Point(500, 150));
        this.addChild(this.rabbit, 1);
        this.rabbit.scheduleUpdate();
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

        if (keyCode == cc.KEY.enter) {

            for (var i = 0; i < this.arrows.length; i++) {

                if (this.arrows[i].number == 1) {
                    this.arrows[i].setOpacity(0);
                    break;
                } else if (this.arrows[i].number == 2) {
                    this.arrows[i].setOpacity(0);
                    break;
                } else if (this.arrows[i].number == 3) {
                    this.arrows[i].setOpacity(0);
                    break;
                } else if (this.arrows[i].number == 4) {
                    this.arrows[i].setOpacity(0);
                    break;
                }
            }
        } else if (keyCode == cc.KEY.space) {

            for (var i = 0; i < this.arrows.length; i++) {
                if (this.arrows[i].number == 5) {
                    this.arrows[i].setOpacity(0);
                    break;
                } else if (this.arrows[i].number == 6) {
                    this.arrows[i].setOpacity(0);
                    break;
                } else if (this.arrows[i].number == 7) {
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
                this.arrows[i].position();
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

GameLayer.NUMARROW = 4;