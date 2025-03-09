'use strict';

module.exports.currentTime = async() => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'The current time is ' + new Date().toISOString
    })
  }
}