var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var fetch = require('../workers/htmlfetcher'); //fetcher function
var CronJob = require('cron').CronJob;

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

exports.readListOfUrls = function(callback){
  // Traverse the list of URLs available at ../archives/sites.txt
  var sites = [];
  fs.readFile(exports.paths.list, {encoding: 'utf8'}, function(err, data) {
    if (err) console.log(err);
    _.uniq(data);
    data.split('\n').forEach(function(site) {sites.push(site);});
    callback(sites);
  });
};

exports.isUrlInList = function(data, url){
  // returns true if the queried site is in the archive list
  // returns false if the queried site is not in the archive list
  console.log(data, url);
  return data.indexOf(url) > -1; // Does the url string exist in the data passed in?
};

exports.addUrlToList = function(url){
  // opens the list file in append mode, adds the url
  fs.appendFile(exports.paths.list, url, function(err) {
    if (err) console.log(err);
  });
};

exports.isURLArchived = function(path, callback){
  // checks to see if archives folder contains the website, in the list, if not, fetches it
  // uses siteAssets and reads all the files in the folder --> strict file naming convention
  var found = false;
  fs.readdir(exports.paths.archivedSites, function(err, files) {
    found = files.indexOf(path) > -1;
    callback(found);
  });
};

exports.downloadUrls = function(url){
  // scrapes the request url for html file. html fetcher by invoking htmlfetcher export
  fetch(url);
};

var cronify = function() {
  exports.readListOfUrls(function(arr) {
    arr.forEach(function(site) {
      console.log(site);
      exports.downloadUrls(site);
    });
  });
};

new CronJob('*/1 * * * *', function(){
  cronify();
}, null, true);
