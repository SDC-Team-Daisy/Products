const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

describe('products', () => {
  it('should return 200 status code upon successful get request for product 1.', async () => {
    const response = await request.get('/products/1')
    expect(response.status).toBe(200);
  });

  it('should return 200 status code upon successful get request for all styles of product 1.', async () => {
    const response = await request.get('/products/1/styles')
    expect(response.status).toBe(200);
  });
});