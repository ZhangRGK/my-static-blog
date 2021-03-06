var koa = require('koa');
var router = require('koa-router');
var app = koa();

var serve = require('koa-static');
var jade  = require('koa-jade');

var content = require('./router/content');
var cover = require('./router/cover');
var manager = require('./router/manager');

// logger
app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s - %s %s - %s ms', this.status,this.method, this.url, ms)
});

app.use(serve(__dirname + '/public'));

app.use(jade.middleware({
    viewPath: __dirname + '/views',
    pretty: true,
    compileDebug: false,
    locals:{
        "author": "ZhangRGK",
        "motto": "放轻松"
    }
}));

app.use(router(app));

// routers
app.get('/content/:file', content.get);
app.get('/', cover.get);
app.post('/manager/pull', manager.post);

app.listen(3000);
