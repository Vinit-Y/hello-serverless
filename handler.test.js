const { hello } = require('./handler');

test('hello with name parameter', async () => {
  const queryStringParameters = { name: 'John' };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, John!');
});

test('hello without name parameter', async () => {
  const event = { queryStringParameters: null };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, World!');
});

test('hello with empty name parameter', async () => {
  const queryStringParameters = { name: '' };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, World!');
});

test('hello with missing queryStringParameters', async () => {
  const event = {};

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, World!');
});

test('hello with error', async () => {
  const event = null;

  const response = await hello(event);

  expect(response.statusCode).toEqual(500);
  expect(JSON.parse(response.body).message).toContain('Error');
});

test('hello with special characters in name', async () => {
  const queryStringParameters = { name: 'J@hn#Doe!' };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, J@hn#Doe!!');
});

test('hello with numeric name parameter', async () => {
  const queryStringParameters = { name: '12345' };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, 12345!');
});

test('hello with boolean name parameter', async () => {
  const queryStringParameters = { name: true };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, true!');
});

test('hello with array name parameter', async () => {
  const queryStringParameters = { name: ['John', 'Doe'] };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, John,Doe!');
});

test('hello with object name parameter', async () => {
  const queryStringParameters = { name: { first: 'John', last: 'Doe' } };
  const event = { queryStringParameters };

  const response = await hello(event);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual('Hello, [object Object]!');
});
