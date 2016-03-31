import { SongModel } from './Song/SongModel.js';


var SongCollection = Backbone.Collection.extend({
	model : SongModel,

});


export { SongCollection };
