"use strict";var listening,express=require("express"),compression=require("compression"),app=express(),router=express.Router(),path=require("path"),request=require("request"),bodyParser=require("body-parser"),fs=require("fs"),browserSync=require("browser-sync"),pug=require("pug"),json_body_parser=bodyParser.json(),urlencoded_body_parser=bodyParser.urlencoded({extended:!0}),site={port:process.env.PORT||8080,root:"./",views:"./docs"};function makeid(e){for(var r="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o=0;o<e;o++)r+=s.charAt(Math.floor(Math.random()*s.length));return r}function PugCom(e,r){function s(e){var r=path.join(e),s=fs.readFileSync(r,"utf8"),o=pug.compile(s,{client:!0,compileDebug:!1,filename:r});return t(o,r.replace(".pug","")),1}var t=function(e){var r=makeid(10),s=e.toString().replace('function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html +',"var "+r+" = ").replace("return pug_html;}","document.write("+r+");;");return o.write(s)},o=fs.createWriteStream(r,{flags:"w"});s(e)}app.use(json_body_parser),app.use(urlencoded_body_parser),app.use("/cv",express.static(site.root+"/docs")),"production"!==process.env.NODE_ENV?(listening=function(){browserSync({watch:!0,files:[site.root+"/**/*.{js,css,pug}"],notify:!1,online:!1,open:!0,port:site.port+1,proxy:"localhost:"+site.port+"/cv",ui:!1})},app.locals.pretty=!0,app.listen(site.port,listening)):(app.listen(site.port,function(){console.log("App listening on port !"+site.port),require("openurl").open("http://localhost:"+site.port+"/cv")}),request({uri:"http://localhost:8080/cv"},function(e,r,s){fs.writeFile("./docs/index.html",s,function(e){})}),request({uri:"http://localhost:8080/cv/en"},function(e,r,s){fs.writeFile("./docs/en/index.html",s,function(e){})}),request({uri:"http://localhost:8080/cv/game"},function(e,r,s){fs.writeFile("./docs/game/index.html",s,function(e){})})),app.set("view engine","pug"),app.set("views",site.views),router.use(function(e,r,s){s()}),app.get("/cv",function(e,r){r.render("index",{key:makeid(200),val:makeid(20),memory:process.memoryUsage(),cpu:process.cpuUsage(),platform:process.platform,version:process.versions})}),app.get("/cv/en",function(e,r){r.render("en/index",{key:makeid(200),val:makeid(20),memory:process.memoryUsage(),cpu:process.cpuUsage(),platform:process.platform,version:process.versions})}),app.get("/cv/game",function(e,r){r.render("game/index",{key:makeid(200),val:makeid(20),memory:process.memoryUsage(),cpu:process.cpuUsage(),platform:process.platform,version:process.versions})}),app.use("/cv",router),app.use("/cv/en/",router),app.use("/cv/game/",router),app.get("*",function(e,r,s){var o=new Error;o.status=404,s(o)}),app.use(function(e,r,s,o){return 404!==e.status?o():(s.status(400),void s.render("404.pug",{title:"404 We're sorry!",desc:"We couldn't find what you're looking for",btn:"» Go back to the main page"}))}),app.use(function(e,r,s,o){return 500!==e.status?o():(s.status(500),void s.render("500.pug",{title:"500 Internal server error",desc:"Application is shutting down on the web server."}))}),app.use(compression()),PugCom(site.root+"/docs/cv.pug",site.root+"/docs/cv.js"),PugCom(site.root+"/docs/en/cv.pug",site.root+"/docs/en/cv.js");