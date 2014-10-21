var fs = require('fs');

exports.get = function* () {
    var contentPath = "./content"
    var files = fs.readdirSync(contentPath);
    var blogs = []
    files.forEach(function(file) {
        var mtime = new Date(Date.parse(fs.statSync(contentPath + "/" + file).mtime));
        var blog = {
            "name":file.replace(".md",""),
            "url":"/content/"+file.replace(".md",""),
            "mtime": mtime.getFullYear() + "年" + mtime.getMonth() + "月" + mtime.getDate() + "日 " + mtime.getHours() + "时"
        };
        blogs.push(blog);
    });
    yield this.render("cover", {title:"大黑洞",blogs:blogs}, true);
}
