var GameLayer = cc.LayerColor.extend({

    init: function () {

        this._super();
        this.setPosition(new cc.Point(0, 0));

        this.createBackground();
        this.createDragon();
        this.createHeart();
        this.createSetOfAnimals();
        
        this.checkStatus();

        this.scheduleUpdate();
        this.addKeyboardHandlers();
        return true;

    },

    createSetOfAnimals: function () {
        this.animals = [];
        for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
            this.animals[i] = new Arrow();
            this.animals[i].createAnimals(i);
            this.animals[i].position();
            this.addChild(this.animals[i]);
            this.animals[i].scheduleUpdate();
        }
    },

    createBackground: function () {
        this.background = new Background();
        this.background.setPosition(new cc.Point(this.width / 2, this.height / 2));
        this.addChild(this.background);
    },

    createDragon: function () {
        this.dragon = new Dragon();
        this.dragon.setPosition(new cc.Point(950, 150));
        this.addChild(this.dragon, 1);
        this.dragon.scheduleUpdate();
    },

    createHeart: function () {
        this.hearts = [];
        for (var i = 1; i < Heart.NUMHEART; i++) {
            this.hearts[i] = new Heart();
            this.hearts[i].positionOfHeart(i);
            this.addChild(this.hearts[i]);
        }
        return this.hearts;
    },

    checkStatus: function () {
        this.isAlive = this.createHeart();
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

        for (var i = 1; i < GameLayer.NUMANIMALS; i++) {

            if (keyCode == cc.KEY.a) {
                if (i == 1) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.s) {
                if (i == 2) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.d) {
                if (i == 3) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.f) {
                if (i == 4) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.g) {
                if (i == 5) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.h) {
                if (i == 6) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.j) {
                if (i == 7) {
                    this.animals[i].setOpacity(0);
                }
            } else if (keyCode == cc.KEY.k) {
                if (i == 8) {
                    this.animals[i].setOpacity(0);
                }
            }
        }
    },

    onKeyUp: function (keyCode, event) {},

    minimumOfPositionY: function () {
        for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
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
    },

    update: function () {

        for (var i = 1; i < GameLayer.NUMANIMALS; i++) {

            var pos = this.animals[i];
            if (this.animals[i].getOpacity() != 0 && pos.y <= 200) {
                if (Heart.NUMHEART >= 1) {
                    this.isAlive[Heart.NUMHEART - 1].setDeadTexture();
                }
            }
            if (pos.y <= -100) {
                this.animals[i].vy = -0.5;
                this.animals[i].setOpacity(255);
                this.animals[i].position(i);
                Heart.NUMHEART--;
            }
        }
    },
    
//    isAlive: function () {
//        for (var i = 0; i < GameLayer.NUMANIMALS; i++) {
//            
//        }       this.start = true;
//    },
    
    over: function () {
        
        this.start = false;
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