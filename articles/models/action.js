'use strict';

var Promise = require("bluebird");

module.exports.GET = function(event, context){
  return new Promise(function (resolve, reject){
    if (1===2) reject(error)
    else resolve("Im a returned Promise. Yay!");
  });

}
