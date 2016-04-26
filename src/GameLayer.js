var GameLayer = cc.LayerColor.extend({

    init: function () {

        this._super();

        this.setPosition(new cc.Point(0, 0));

        this.createBackground();
        this.createDragon();
        this.createHeart();

        this.scheduleUpdate();
        this.addKeyboardHandlers();

        this.animals = [];
        for (var i = 1; i < 9; i++) {
            this.animals[i] = new Arrow();
            this.animals[i].createAnimals(i);
            this.animals[i].position();
            this.addChild(this.animals[i]);
            this.animals[i].scheduleUpdate();
        }

        return true;

    },

    createAnimal: function () {
        this.animal = new Arrow();
        this.animal.position();
        this.addChild(this.animal);
    },

    createBackground: function () {
        this.bg = new Background();
        this.bg.setPosition(new cc.Point(800, 400));
        this.addChild(this.bg);
    },

    createDragon: function () {
        this.dragon = new Dragon();
        this.dragon.setPosition(new cc.Point(750, 150));
        this.addChild(this.dragon, 1);
        this.dragon.scheduleUpdate();
    },

    createHeart: function () {
        this.heart = new Heart();
        this.heart.setPosition(new cc.Point(150, 700));
        this.addChild(this.heart);
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

        if (keyCode == cc.KEY.a) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 1) {
                    this.animals[i].setOpacity(0);
                }
            }
        } else if (keyCode == cc.KEY.s) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 2) {
                    this.animals[i].setOpacity(0);
                }
            }
        } else if (keyCode == cc.KEY.d) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 3) {
                    this.animals[i].setOpacity(0);
                }
            }
        }  else if (keyCode == cc.KEY.f) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 4) {
                    this.animals[i].setOpacity(0);
                }
            }
        }  else if (keyCode == cc.KEY.g) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 5) {
                    this.animals[i].setOpacity(0);
                }
            }
        }  else if (keyCode == cc.KEY.h) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 6) {
                    this.animals[i].setOpacity(0);
                }
            }
        }  else if (keyCode == cc.KEY.j) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 7) {
                    this.animals[i].setOpacity(0);
                }
            }
        }  else if (keyCode == cc.KEY.k) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                if (i == 8) {
                    this.animals[i].setOpacity(0);
                }
            }
        }
    },

    onKeyUp: function (keyCode, event) {},

    minimumOfPositionY: function () {
        for (var i = 1; i < 9; i++) {
            if (i % 2 != 2) {
                if (i == 1) {
                    this.minimumOfArctic = this.animals[i].getPositionY;
                } else if (i > 1 &&
                    this.arrows[i - 1].getPositionY() < this.arrows[i].getPositionY()) {
                    this.minimumOfArctic = this.animals[i - 1].getPositionY();
                }
            } else if (i % 2 == 2) {
                if (i == 1) {
                    this.minimumOfFlat = this.animals[i].getPositionY;
                } else if (i > 1 &&
                    this.arrows[i - 1].getPositionY() < this.arrows[i].getPositionY()) {
                    this.minimumOfFlat = this.animals[i - 1].getPositionY();
                }
            }
        }
        if (this.minimumOfArctic < this.minimumOfFlat) {
            return this.minimumOfArctic;
        } else if (this.minimumOfFlat < this.minimumOfArctic) {
            return this.minimumOfFlat;
        }
    },

    update: function () {
        for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
            var pos = this.animals[i];
            if (pos.y <= -100) {
                this.animals[i].vy = -0.5;
                this.animals[i].setOpacity(255);
                this.animals[i].position();
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

GameLayer.NUMANIMALS = 9;