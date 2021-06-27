var express = require('express');
var compression = require('compression');
var app = express();
var router = express.Router();
var path = require('path');
var request = require("request");
var bodyParser = require("body-parser");
var fs = require('fs');
var browserSync = require('browser-sync');
var pug = require('pug');
var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
var site = {
	port: process.env.PORT || 8080,
	root: './',
	views: './docs'
}
app.use(json_body_parser);
app.use(urlencoded_body_parser);
app.use('/', express.static(site.root + '/docs'));

if (process.env.NODE_ENV !== 'production') {
	app.locals.pretty = true;
	app.listen(site.port, listening);
	function listening() {
		browserSync({
			watch: true,
			files: [site.root + '/**/*.{js,css,pug}'],
			notify: false,
			online: false,
			open: true,
			port: site.port + 1,
			proxy: 'localhost:' + site.port + '/index.cb',
			ui: false
		});
	}
} else {
	app.listen(site.port, function () {
		console.log('App listening on port !' + site.port);
		require("openurl").open("http://localhost:" + site.port + '/index.cb')
	});
	request({
		uri: "http://localhost:8080/index.cb",
	  }, function(error, response, body) {
		var htmlContent = body;
		fs.writeFile('./docs/index.html', htmlContent, (error) => { /* handle error */ });
	  });
	request({
		uri: "http://localhost:8080/index_en.cb",
	  }, function(error, response, body) {
		var htmlContent = body;
		fs.writeFile('./docs/index_en.html', htmlContent, (error) => { /* handle error */ });
	  });
}
app.set('view engine', 'pug')
app.set('views', site.views)

router.use(function (req, res, next) {
	next();
});

router.get('/', function (req, res) {
	res.render('index', { key: makeid(200), val: makeid(20), memory: process.memoryUsage(), cpu: process.cpuUsage(), platform: process.platform, version: process.versions })
})
router.get('/index_en.cb', function (req, res) {
	res.render('index_en', { key: makeid(200), val: makeid(20), memory: process.memoryUsage(), cpu: process.cpuUsage(), platform: process.platform, version: process.versions })
})

app.use('/', router);
app.use('/index.cb', router);
app.use('/index_en.cb', router);

// handling 404 errors
app.get('*', function (req, res, next) {
	var err = new Error();
	err.status = 404;
	next(err);
});
app.use(function (err, req, res, next) {
	if (err.status !== 404) {
		return next();
	}
	res.status(400);
	res.render('404.pug', { title: "404 We're sorry!", desc: "We couldn't find what you're looking for", btn: "» Go back to the main page" });
});
app.use(function (err, req, res, next) {
	if (err.status !== 500) {
		return next();
	}
	res.status(500);
	res.render('500.pug', { title: "500 Internal server error", desc: "Application is shutting down on the web server." });
});

app.use(compression());
function makeid(e) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < e; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

function PugCom(a, b) {
	var outFileStream, parseFiles, writeToOutput;
	parseFiles = function (dirname) {
		var compiled, file, fileContents, filenames, i, pathv, len, results, stats;
		file = path.join(dirname)
		results = [];
		fileContents = fs.readFileSync(file, 'utf8');
		compiled = pug.compile(fileContents, {
			client: true,
			compileDebug: false,
			filename: file
		});
		writeToOutput(compiled, file.replace('.pug', ''))

		return results;
	};

	writeToOutput = function (fn, fnName) {
		var fnString;
		var id = makeid(10)
		fnString = fn.toString().replace('function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html +', "var " + id + " = ").replace('return pug_html;}', 'document.write(' + id + ');;')
		return outFileStream.write(fnString);
	};
	outFileStream = fs.createWriteStream(b, {
		flags: 'w'
	});
	parseFiles(a, b);
}
PugCom(site.root + '/docs/cv.pug', site.root + '/docs/cv.js')
PugCom(site.root + '/docs/cv_en.pug', site.root + '/docs/cv_en.js')
