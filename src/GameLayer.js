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

        return true;

    },

    addKeyboardHandlers: function () {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                self.onKeyDown(keyCode);
            }
        }, this);
    },


    onKeyDown: function (keyCode, event) {
        if (keyCode == cc.KEY.up) {
            this.arrows.removeUP();
        } else if (keyCode == cc.KEY.down) {
            this.arrows.removeDOWN();
        } else if (keyCode == cc.KEY.left) {
            this.arrows.removeLEFT();
        } else if (keyCode == cc.KEY.right) {
            this.arrows.removeRIGHT();
        }
    },



    update: function () {
        for (var i = 0; i < this.arrows.length; i++) {
            var pos = this.arrows[i];
            if (pos.y <= -100) {
                this.arrows[i].vy = -0.5;
                this.arrows[i].setPosition(new cc.Point(100 + (Math.random() * 800),
                    700 + Math.random() * 300));
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
