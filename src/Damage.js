var Damage = cc.Sprite.extend({
	ctor : function(){
		this._super();
	},

	update : function() {

	},

	effect : function( obj ){
		cc.audioEngine.playEffect('res/effects/.wav');
	},
});