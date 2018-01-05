var express = require("express")

var app = express();

app.use(express.static(__dirname + '/public_html'));

app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});
var server = app.listen(process.env.PORT || 80);

