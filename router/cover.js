var fs = require('fs');

exports.get = function* () {
    var contentPath = "./content"
    var files = fs.readdirSync(contentPath);
    var blogs = []
    files.forEach(function(file) {
        if(file.indexOf("git")>=0) {
            return;
        }
        var mtime = new Date(Date.parse(fs.statSync(contentPath + "/" + file).mtime));
        var blog = {
            "name":file.replace(".md",""),
            "url":"/content/"+file.replace(".md",""),
            "realtime":mtime,
            "mtime": mtime.getFullYear() + "年" + (mtime.getMonth()+1) + "月" + mtime.getDate() + "日 " + mtime.getHours() + "时"
        };
        blogs.push(blog);
    });
    blogs.sort(function(a,b) {
        return b.realtime - a.realtime;
    });
    yield this.render("cover", {title:"大黑洞",blogs:blogs}, true);
}
