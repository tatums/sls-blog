'use strict';

module.exports.handler = function(event, context) {
  console.log('\n\n', {eventId: event.id, method: event.httpMethod}, '\n\n');
  return context.done(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
