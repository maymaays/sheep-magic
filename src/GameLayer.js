var GameLayer = cc.LayerColor.extend({

    init: function () {
        this._super();
        this.setPosition(new cc.Point(0, 0));
        this.createStartLayer();
        this.scheduleUpdate();
        this.addKeyboardHandlers();
        this.status = 1;
        return true;
    },

    startGame: function () {
        this.start = true;
        this.createBackground();
        this.createDragon();
        this.createHeart();
        this.createSetOfAnimals();
        this.createAdditionHowTo();
        this.createScore();
        this.checkStatus();
        cc.audioEngine.playMusic('res/sounds/Carefree.mp3');
    },

    createAdditionHowTo: function () {
        this.addhowto = new AdditionalHowTo();
        this.addhowto.setPosition(new cc.Point(870, 857));
        this.addChild(this.addhowto);
    },

    createHowTo: function () {
        this.howto = new HowToPlay();
        this.howto.setPosition(new cc.Point(this.width / 2, 420));
        this.addChild(this.howto);
    },

    createStartLayer: function () {
        this.startlayer = new StartBg();
        this.startlayer.setPosition(new cc.Point(this.width / 2, 350));
        this.addChild(this.startlayer);
        this.startlayer.addKeyboardHandlers();
        this.startlayer.scheduleUpdate();
        cc.audioEngine.playMusic('res/sounds/The Snow Queen.mp3');
    },

    createSetOfAnimals: function () {
        this.animals = [];
        for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
            this.animals[i] = new Arrow();
            this.animals[i].createAnimals(i);
            this.animals[i].position(i);
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

    createScore: function () {
        this.score = 0;
        this.scoreLabel = cc.LabelTTF.create('Score : ' + this.score, 'ArcadeClassic', 80);
        this.scoreLabel.setPosition(new cc.Point(270, 800));
        this.addChild(this.scoreLabel);
    },

    updateScore: function () {
        this.score += 0.005;
        this.scoreLabel.setString('Score : ' + Math.round(this.score));
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
            } else if (keyCode == cc.KEY.enter) {
                if (this.status == GameLayer.PAGESTATUS.howtofirst) {
                    this.startGame();
                    this.status = GameLayer.PAGESTATUS.play;
                }
            } else if (keyCode == cc.KEY.space) {
                if (this.status == GameLayer.PAGESTATUS.over) {
                    Heart.NUMHEART = 4;
                    StartBg.status = 0;
                    this.start = false;
                    this.init();
                }
            }
        }
    },

    onKeyUp: function (keyCode, event) {},

    checkBackgroundStatus: function () {

        if (StartBg.status == 1 && this.status == 1) {
            this.startGame();
            this.status = GameLayer.PAGESTATUS.playfirst;
        }
        if (StartBg.status == 2 && this.status == 1) {
            this.createHowTo();
            this.status = GameLayer.PAGESTATUS.howtofirst;
        }
    },

    update: function () {
        this.checkBackgroundStatus();
        this.updateAlive();
    },

    updateAlive: function () {
        if (this.start) {
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                var pos = this.animals[i];
                this.updateScore();
                console.log("arai wa" + Heart.NUMHEART);
                if (this.animals[i].getOpacity() != 0 && pos.y <= 200) {
                    if (Heart.NUMHEART > 1) {
                        this.isAlive[Heart.NUMHEART - 1].setDeadTexture();
                    } else {
                        this.start = false;
                        this.removeAllChildren();
                        this.over = new GameoverBg();
                        this.over.setPosition(new cc.Point(this.width / 2, 350));
                        this.addChild(this.over);
                        this.status = GameLayer.PAGESTATUS.over;
                    }
                    console.log("arai bf" + Heart.NUMHEART);
                    Heart.NUMHEART--;
                    console.log("arai af" + Heart.NUMHEART);
                }

                if (pos.y <= -100) {
                    this.animals[i].vy = -0.05;
                    this.animals[i].setOpacity(255);
                    this.animals[i].position(i);
                }
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
GameLayer.PAGESTATUS = {
    startpage: 1,
    playfirst: 2,
    howtofirst: 3,
    play: 4,
    gameover: 5
};