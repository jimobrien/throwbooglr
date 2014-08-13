var fs = require('fs');
var path = require('path');
var _ = require('underscore');

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

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  // Parse the list of URLs available at ../archives/sites.txt
    // Dump into temporary array?
};

exports.isUrlInList = function(){
  // returns true if the queried site is in the archive list
  // returns false if the queried site is not in the archive list
    // when not found, tasks CRON with fetching and archiving, invoked addUrlToList
};

exports.addUrlToList = function(){
  // Writes a new line to sites.txt if isUrlInList returns false
};

exports.isURLArchived = function(){
  // checks to see if archives folder contains the website, in the list, if not, fetches it
  // uses siteAssets and reads all the files in the folder --> strict file naming convention
};

exports.downloadUrls = function(){
  // scrapes the request url for html file. html fetcher by invoking htmlfetcher export
  
};
