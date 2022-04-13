const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://walmart.p.rapidapi.com/v2/auto-complete?term=goldteam",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "walmart.p.rapidapi.com",
		"X-RapidAPI-Key": "581fd4c979mshaaa4f6035ab5483p1cb968jsnf3c78da91faf"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});