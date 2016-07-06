var GitKit = require('./lib/gitkit');
var MemoryFS = require('./lib/gitkit/lib/fs/memory');

// Prepare the filesystem
var fs = MemoryFS(process.cwd());

isBare = false;

// Create a repository instance
var repo = GitKit.Repository.createWithFS(fs, isBare);
var transport = new GitKit.HTTPTransport('https://github.com/deanrather/deanrather.com');

GitKit.TransferUtils.clone(repo, transport)
.then(function(newRepo) {
	console.log("success", newRepo);
}, function(err) {
	console.log("error", err);
})
