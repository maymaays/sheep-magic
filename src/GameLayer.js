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
        this.heart = new Heart();
        this.heart.heartposition();
        this.addChild(this.heart);
    },

    createScore: function () {
        this.scoreLabel = cc.LabelTTF.create('Score : ' + GameLayer.SCORE, 'ArcadeClassic', 80);
        this.scoreLabel.setPosition(new cc.Point(270, 800));
        this.addChild(this.scoreLabel);
    },

    restart: function () {
        Heart.NUMHEART = 4;
        GameLayer.SCORE = 0;
        StartBg.status = 0;
        this.start = false;
        this.init();
    },

    finalScoreLabel: function () {
        this.totalscore = cc.LabelTTF.create('Your Score : ' + Math.round(GameLayer.SCORE), 'Steelworks Vintage Demo', 140);
        this.totalscore.setPosition(new cc.Point(this.width / 2, 850));
        this.addChild(this.totalscore);
    },

    gameOverLayer: function () {
        cc.audioEngine.playEffect('res/sounds/beep-01a.mp3');
        cc.audioEngine.playEffect('res/sounds/Gameover.mp3');
        cc.audioEngine.playMusic('res/sounds/Music for Funeral Home - Part 11.mp3');
        this.over = new GameoverBg();
        this.over.setPosition(new cc.Point(this.width / 2, 350));
        this.addChild(this.over);
    },

    clickeffect: function () {
        cc.audioEngine.playEffect('res/sounds/button-30.mp3');
    },

    entertothepageeffect: function () {
        cc.audioEngine.playEffect('res/sounds/button-32.mp3');
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
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.s) {
                if (i == 2) {
                    this.animals[i].setOpacity(0);
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.d) {
                if (i == 3) {
                    this.animals[i].setOpacity(0);
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.f) {
                if (i == 4) {
                    this.animals[i].setOpacity(0);
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.g) {
                if (i == 5) {
                    this.animals[i].setOpacity(0);
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.h) {
                if (i == 6) {
                    this.animals[i].setOpacity(0);
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.j) {
                if (i == 7) {
                    this.animals[i].setOpacity(0);
                    this.clickeffect();
                }
            } else if (keyCode == cc.KEY.enter) {
                if (this.status == GameLayer.PAGESTATUS.howtofirst) {
                    this.entertothepageeffect();
                    this.startGame();
                    this.status = GameLayer.PAGESTATUS.play;
                }
            } else if (keyCode == cc.KEY.space) {
                if (this.status == GameLayer.PAGESTATUS.over) {
                    this.entertothepageeffect();
                    this.restart();
                }
            }
        }
    },

    onKeyUp: function (keyCode, event) {},

    checkBackgroundStatus: function () {

        if (StartBg.status == 1 && this.status == 1) {
            this.entertothepageeffect();
            this.startGame();
            this.status = GameLayer.PAGESTATUS.playfirst;
        }
        if (StartBg.status == 2 && this.status == 1) {
            this.entertothepageeffect();
            this.createHowTo();
            this.status = GameLayer.PAGESTATUS.howtofirst;
        }
    },

    checkStatus: function () {
        this.isAlive = this.createHeart();
    },

    updateScore: function () {
        GameLayer.SCORE += 0.005;
        this.scoreLabel.setString('Score : ' + Math.round(GameLayer.SCORE));
    },

    update: function () {
        this.checkBackgroundStatus();
        this.updateAlive();
    },

    updateAlive: function () {
        if (this.start) {
            this.times = 1;
            for (var i = 1; i < GameLayer.NUMANIMALS; i++) {
                var pos = this.animals[i];
                this.updateScore();
                if (this.animals[i].getOpacity() == 255 && (pos.y <= 250 && pos.y > 0)) {
                    if (Heart.HEARTSTATUS) {
                        Heart.HEARTSTATUS = false;
                    } else {
                        this.start = false;
                        this.removeAllChildren();
                        this.gameOverLayer();
                        this.finalScoreLabel();
                        this.status = GameLayer.PAGESTATUS.over;
                    }
                } else if (pos.y <= -100) {
                    this.animals[i].vy = -0.05;
                    this.animals[i].setOpacity(255);
                    this.animals[i].position();
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

GameLayer.NUMANIMALS = 8;

GameLayer.SCORE = 0;

GameLayer.PAGESTATUS = {
    startpage: 1,
    playfirst: 2,
    howtofirst: 3,
    play: 4,
    gameover: 5
};