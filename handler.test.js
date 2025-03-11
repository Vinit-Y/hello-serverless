const { hello } = require('./handler');

// Create a test case using Jest
test('hello', async () => {
  const queryStringParameters = { name: 'John' };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, John!');
});
