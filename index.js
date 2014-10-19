var koa = require('koa');
var router = require('koa-router');
var app = koa();

// logger
app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s - %s %s - %s ms', this.status,this.method, this.url, ms)
});

app.use(router(app));

app.get('/', function *() {
    this.body = 'Hello World';
});

app.listen(3000);
