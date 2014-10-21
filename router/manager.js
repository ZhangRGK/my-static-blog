var exec = require('child_process').exec;

exports.post = function* () {
    exec("cd content && git pull -f master:master");
}