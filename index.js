import express, { Router, static } from "express";
import compression from "compression";
import { join } from "path";
import { json as _json, urlencoded } from "body-parser";
import { readFile, writeFileSync, readdir, existsSync, mkdirSync, unlinkSync, writeFile, readFileSync, createWriteStream } from "fs";
import { copySync, move, writeFileSync as _writeFileSync, appendFileSync, copy } from "fs-extra";
import { createHash } from "crypto";
import multer, { diskStorage } from "multer";
import browserSync from "browser-sync";
import { compile } from "pug";
var app = express();
var router = Router();
var json_body_parser = _json();
var urlencoded_body_parser = urlencoded({ extended: true });
var site = {
	port: process.env.PORT || 8080,
	root: './',
	views: './views'
}
app.use(json_body_parser);
app.use(urlencoded_body_parser);
app.use('/', static(site.root + '/'));

if (process.env.NODE_ENV !== 'production') {
	app.locals.pretty = true;
	app.listen(site.port, listening);
	function listening() {
		browserSync({
			files: [site.root + '/**/*.{js,css}'],
			notify: false,
			online: false,
			open: true,
			port: site.port + 1,
			proxy: 'localhost:' + site.port,
			ui: false
		});
	}
} else {
	app.listen(site.port, function () {
		console.log('App listening on port !' + site.port);
		require("openurl").open("http://localhost:" + site.port + '/index.cv')
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

app.use('/', router);
app.use('/index.cv', router);

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
		file = join(dirname)
		results = [];
		fileContents = readFileSync(file, 'utf8');
		compiled = compile(fileContents, {
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
	outFileStream = createWriteStream(b, {
		flags: 'w'
	});
	parseFiles(a, b);
}
PugCom(site.root + '/views/cv.pug', site.root + '/views/cv.js')
