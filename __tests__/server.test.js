'use strict';

const supertest = require('supertest');
const server = require('../src/server');

const request = supertest(server.app);

describe('Express Server', () => {

  test('returns a 404 on a bad route', async () => {
    const response = await request.get('/does-not-exist');

    expect(response.status).toEqual(404);
  });

  test('returns a 404 on a bad method', async () => {
    const response = await request.post('/person');

    expect(response.status).toEqual(404);
  });

  test('returns a 500 if no name is provided', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  test('returns a 200 if a name is provided', async () => {
    const response = await request.get('/person?name=fred');

    expect(response.status).toEqual(200);
  });

  test('returns the correct object when a name is provided', async () => {
    const response = await request.get('/person?name=fred');

    expect(response.body).toEqual({
      name: 'fred',
    });
  });

});