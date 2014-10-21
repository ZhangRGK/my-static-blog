var fs = require('fs');

exports.get = function* () {
    var contentPath = "./content"
    var files = fs.readdirSync(contentPath);
    var blogs = []
    files.forEach(function(file) {
        var blog = {
            "name":file,
            "url":"/content/"+file.replace(".md",""),
            "mdate":fs.statSync(contentPath + "/" + file).mtime
        };
        blogs.push(blog);
    });
    yield this.render("cover", {blogs:blogs}, true);
}
