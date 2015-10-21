var artistList = {};
var artistName = 'ARH6W4X1187B99274F'; //A-trak
artistList.apiKey = "GPEMLQH0JMGAOKXZX ";

artistList.artistEndPoint = 'http://developer.echonest.com/api/v4/artist/profile?';

// artistList.artistRequest = function(){
// 	$.ajax({
// 		url: artistList.artistEndPoint,
// 		type: 'GET',
// 		dataType: 'json',
// 		data: {
// 			api_key: artistList.apiKey,
// 			id: 'musicbrainz:artist:92218c9e-83bb-494d-afc2-f9475b64490d',
// 			format: 'json',
// 			callback: 'jsonp',
// 			bucket: 'biographies',
// 		 	bucket: 'blogs',
// 			bucket: 'hotttnesss',
// 			bucket: 'images',
// 			bucket: 'news',
// 			bucket: 'urls',
// 			bucket: 'video',
// 			bucket: 'artist_location',
// 			bucket: 'songs'		 
// 		}

// 	}).then(function(res){
// 		console.log(res);
// 	})
// }

var artname = 'GREEN DAY'

artistList.test = function(){
	$.ajax({
		url: 'http://developer.echonest.com/api/v4/artist/news?api_key=GPEMLQH0JMGAOKXZX&id=musicbrainz:artist:92218c9e-83bb-494d-afc2-f9475b64490d&format=json',
		type: 'GET',
		dataType: 'json'
	}).then(function(res){
		console.log(res);
	})
}

artistList.init = function(){
	// artistList.artistRequest();
	artistList.test();
};

$(function(){
	artistList.init();
});
