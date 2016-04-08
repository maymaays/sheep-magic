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


        this.createArrow();
        //
        //        for (var i = 0; i < GameLayer.NUMARROW; i++) {
        //            this.arrow.push(new Arrow());
        //            this.arrow[i].setPosition(new cc.Point(Math.random() * 1000, 800));
        //            this.addChild(this.arrow[i], i);
        //            this.arrow[i].scheduleUpdate();
        //
        //        }

        this.scheduleUpdate();

        //        for (var i = 0; i < this.arrow.length; i++) {
        //            this.arrow[i].scheduleUpdate();
        //        }

        return true;

    },

    createArrow: function () {

        this.arrow = new Arrow();
        this.arrow.setPosition(new cc.Point(Math.random() * 1000, 800) );
        this.addChild( this.arrow );
        this.arrow.scheduleUpdate();
    },

    update: function () {
        this.createArrow();
        //        var pos = getPosition();
        //        if (pos.y <= 200) {
        //            this.setPosition(new cc.Point(Math.random() * 1000, 800));
        //        }
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
