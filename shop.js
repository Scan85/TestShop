var express = require("express");
var request = require("request");
var path = require("path");
var app = express();
var url = "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json";

request({
	url: url,
	json: true
}, function (error, response, body) {
	if(!error && response.statusCode == 200) {
		app.locals.jsondata = body;
		console.log("JSON erfolgreich geladen");
	}
})

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname));

app.get("/", function(req, res){
	res.render("home.ejs", {
		"title":"Home"
	});
})

app.get("/productList/", function(req, res){
	res.render("productlist.ejs", {
		"title":"Produkte", 
		"content":"Content Variable"
	});
})

var server = app.listen(2500, function(){
	console.log("Server läuft unter http://localhost:2500");
});