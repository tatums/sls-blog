'use strict';

var action = require('./lib/action.js');

module.exports.handler = function(event, context) {

  var run = action[event.httpMethod];
  run(event, context)

  .then(function(data){
    return context.done(null, {message: data});
  })
  .catch(function(error){
    return context.done(null, {message: error});
  });

};
