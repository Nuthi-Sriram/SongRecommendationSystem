var http = require('http');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var MongoStore = require('connect-mongo')(session);

var app = express();

app.locals.pretty = true;
app.set('port', process.env.PORT || 9000);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'pug');
// app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('stylus').middleware({ src: __dirname + '/app/public' }));
app.use(express.static(__dirname + '/app/public'));

// build mongo database connection url //

process.env.DB_HOST = process.env.DB_HOST || 'localhost'
process.env.DB_PORT = process.env.DB_PORT || 27017;
process.env.DB_NAME = process.env.DB_NAME || 'node-login';

if (app.get('env') != 'live'){
	process.env.DB_URL = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT;
}	else {
// prepend url with authentication credentials // 
	process.env.DB_URL = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST+':'+process.env.DB_PORT;
}
// app.set("views", "./views");
// app.set("view engine", "ejs");


app.use(session({
	secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
	proxy: true,
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ url: process.env.DB_URL })
	})
);

app.get('/multipleRedirects',(req,res)=>{
// 	// app.use(express.static(path.join(__dirname, '/frontendplaceholder/theme')));
// 	// app.set('view engine', 'html');
// 	// // app.use(app.staticProvider(__dirname + '/frontendplaceholder/theme'));
//     // res.render('index.html');
	// app.use('index.html', express.static(__dirname + '/frontendplaceholder/theme'));
	// app.use(express.static('/frontendplaceholder'))
	// res.sendFile('index.html', {root : __dirname + '/frontendplaceholder/theme'});

	// res.sendFile('style.css', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('blog.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('charts.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('events.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('podcast.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('show.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('single-blog.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('single-podcast.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('single-charts.html', {root : __dirname + '/frontendplaceholder/theme'});
	// res.sendFile('bootstrap.min.js', {root : __dirname + '/frontendplaceholder/js'});
	// res.sendFile('jquery.min.js', {root : __dirname + '/frontendplaceholder/js'});
	// res.sendFile('popper.min.js', {root : __dirname + '/frontendplaceholder/js'});
	// res.sendFile('razo.min.js', {root : __dirname + '/frontendplaceholder/js'});
	// res.sendFile('active.js', {root : __dirname + '/frontendplaceholder/js/default-assets'});

	// res.statusCode = 302;
	// res.setHeader("Location", "/home/sriram/Documents/work/SongRecommendationSystem/frontendplaceholder/theme/index.html");
	// res.end();

	// response.writeHead(301,
	// 	{Location: '/home/sriram/Documents/work/SongRecommendationSystem/frontendplaceholder/theme/index.html' }
	//   );
	//   response.end();
	app.use(express.static(__dirname + '/app'));
	res.render('index.ejs');
	 
});

require('./app/server/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
 
 