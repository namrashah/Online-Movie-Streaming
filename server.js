require('rootpath')();
var express = require('express');
var app = express();
var fs = require('fs')
var path = require('path')
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

app.get('/app/endgame', function(req, res) {
    console.log(req.session.token);   
    if(req.session.token!=undefined){
        const path = 'app/videos/endgame.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
  
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
  
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
  
        res.writeHead(206, head)
        file.pipe(res)
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
    else{
        return res.redirect('/app');
    }
  })

  app.get('/app/black-panther', function(req, res) {
    console.log(req.session.token);   
    if(req.session.token!=undefined){
        const path = 'app/videos/black-panther.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
  
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
  
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
  
        res.writeHead(206, head)
        file.pipe(res)
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
    else{
        return res.redirect('/app');
    }
  })

  app.get('/app/captain-marvel', function(req, res) {
    console.log(req.session.token);   
    if(req.session.token!=undefined){
        const path = 'app/videos/captain-marvel.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
  
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
  
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
  
        res.writeHead(206, head)
        file.pipe(res)
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
    else{
        return res.redirect('/app');
    }
  })

  app.get('/app/deadpool', function(req, res) {
    console.log(req.session.token);   
    if(req.session.token!=undefined){
        const path = 'app/videos/deadpool.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
  
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
  
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
  
        res.writeHead(206, head)
        file.pipe(res)
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
    else{
        return res.redirect('/app');
    }
  })

  app.get('/app/terminator', function(req, res) {
    console.log(req.session.token);   
    if(req.session.token!=undefined){
        const path = 'app/videos/terminator.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
  
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
  
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
  
        res.writeHead(206, head)
        file.pipe(res)
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
    else{
        return res.redirect('/app');
    }
  })

  app.get('/app/rampage', function(req, res) {
    console.log(req.session.token);   
    if(req.session.token!=undefined){
        const path = 'app/videos/rampage.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
  
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
  
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
  
        res.writeHead(206, head)
        file.pipe(res)
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
    else{
        return res.redirect('/app');
    }
  })


// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
    console.log('http://localhost:3000');
});