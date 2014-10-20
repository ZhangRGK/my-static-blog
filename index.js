var koa = require('koa');
var router = require('koa-router');
var app = koa();

var fs = require('fs');
var path = require('path');
var marked = require('marked');
var jade  = require('koa-jade');

// logger
app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s - %s %s - %s ms', this.status,this.method, this.url, ms)
});

app.use(jade.middleware({
    viewPath: __dirname + '/views',
    pretty: true,
    compileDebug: false,
    basedir: 'views/layout.jade'
}));

app.use(router(app));

app.get('/', function *() {
    this.body = 'Hello World';
});

app.get('/content/:file', function *() {
    var fileName = this.params.file;
    var doc = path.normalize('./' + ['content/',fileName,'.md'].join(''));
    var exists = fs.existsSync(doc);
    if(exists) {
        var content = marked(fs.readFileSync(doc, "utf-8"));
        yield this.render('content',{"title":fileName,"content":content},true);
    } else {
        this.throw(404,'Blog not found.');
    }
});

app.listen(3000);
