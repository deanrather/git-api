var express = require('express');



/* eslint-disable no-console */
var path = require('path');

var GitKit = require('gitkit');
var NodeFS = require('./node_modules/gitkit/lib/fs/node');

// Create an FS to write the output repository
var fs = new NodeFS(path.resolve(__dirname, 'data'));

// Create a repository instance
var repo = GitKit.Repository.createWithFS(fs);

// Initialize the repository
GitKit.RepoUtils.init(repo)
