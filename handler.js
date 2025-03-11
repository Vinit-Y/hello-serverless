'use strict';

module.exports.hello = async (event) => {
  try{
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: `Error: ${error.message}`,
          input: event,
        },
        null,
        2
      ),
    };
  }
};
