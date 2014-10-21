var exec = require('child_process').exec;

exports.post = function* () {
    console.log("start pulling ...");
    exec("cd content && git pull -f origin master:master");
    return this.body="pulling repo ..."
}