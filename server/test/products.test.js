const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

describe('products', () => {
  it('should return...', async () => {
    const response = await request.get('/products/?product_id=1')
    expect(response.status).toBe(200);
  });

  it('should return...', async () => {
    const response = await request.get('/products/?product_id=1/styles')
    expect(response.status).toBe(200);
  });
});