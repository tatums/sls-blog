'use strict';

module.exports.handler = function(event, context) {
  var action = require('./models/action');

  var run = action[event.httpMethod];
  run(event, context)

  .then(function(data){
    return context.done(null, {message: data});
  })
  .catch(function(error){
    return context.done(null, {message: error});
  })

};
