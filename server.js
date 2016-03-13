var express = require('express');
var app = express();

//

app.listen(process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
//app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


// begin on the 'home page'
app.get('/', function(req, res) {
    res.render('index');
});
