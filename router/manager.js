var exec = require('child_process').exec;

exports.post = function* () {
    console.log("start pulling ...");
    exec("cd content && git pull -f master:master");
    this.res.status=200;
    this.res.body="pulling repo ...";
}