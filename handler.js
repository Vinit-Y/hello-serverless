'use strict';

module.exports.hello = async (event) => {
  const name = event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : 'World';
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, ${name}!`,      
        input: event,
      },
      null,
      2
    ),
  };


};
