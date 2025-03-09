'use strict'; 

module.exports.add = async (event) => { 
  const { a, b } = event.queryStringParameters || {a : 3, b : 4};
  const sum = Number(a) + Number(b);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `The sum of ${a} and ${b} is ${sum}.`, }),
    headers: {'Content-Type': 'application/json'}
  }
}