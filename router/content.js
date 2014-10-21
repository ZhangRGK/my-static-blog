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
        yield this.render('content',{"title":fileName,"content":content,"date":stat.mtime},true);
    } else {
        this.throw(404,'Blog not found.');
    }
}
