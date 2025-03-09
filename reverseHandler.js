'use strict'; 

module.exports.reverse = async (event) => { 
  const name = event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : '';

  const reverse = name.split('').reverse().join('');
  return {
    statusCode: 200,
    body: JSON.stringify(
      { 
        message: `The reverse of ${name} is ${reverse}`
      }),
    headers: {'Content-Type': 'application/json'}
  };
}