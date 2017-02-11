// grab express
var express = require('express');
var $;
// create an express app
var app = express();
var hbs = require('hbs');
// create an express route for the home page

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//
//     $ = require("jquery")(window);
// });

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// tell node where to look for app resources

// set the view engine to handlebars

//SET THE ROUTES
//home page route
app.get('/', function(req, res) {
    res.locals = {
        data: [
          {photoUrl: 'abc'},
          {photoUrl: 'abcd'}
        ]
    }
    res.render('index');
});

// start the server on port 8080
var server = app.listen(8101);
// send a message
console.log('Server has started!');
// close port if nobody is using it
setTimeout(function() {
server.close();
}, 10000);
