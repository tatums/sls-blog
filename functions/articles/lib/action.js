'use strict';

var Promise = require("bluebird");

module.exports.GET = function(event, context){
  return new Promise(function (resolve, reject){
    if (false) reject("ERROR: Im a rejected Promise")
    else resolve("Im a returned Promise. Yay!");
  });
}
