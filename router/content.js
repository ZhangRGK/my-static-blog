var path = require('path');
var fs = require('fs');
var marked = require('marked');

module.exports.get = function* () {
    var fileName = this.params.file;
    var doc = path.normalize('./' + ['content/',fileName,'.md'].join(''));
    var exists = fs.existsSync(doc);
    if(exists) {
        var content = marked(fs.readFileSync(doc, "utf-8"));
        var stat = fs.statSync(doc);
        var mtime = new Date(Date.parse(stat.mtime));
        yield this.render('content',{"title":fileName,"content":content,"time":mtime.getFullYear() + "-" + mtime.getMonth() + "-" + mtime.getDate() + " " + mtime.getHours() + ":" + mtime.getMinutes()},true);
    } else {
        this.throw(404,'Blog not found.');
    }
}
