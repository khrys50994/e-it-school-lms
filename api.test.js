const request = require('supertest');
const app = require('./server'); // Assurez-vous que 'app' est exporté de votre fichier serveur

describe('API Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should add a new resource', async () => {
    const res = await request(app)
      .post('/api/resources/add')
      .send({
        title: 'Introduction to Node.js',
        content: 'This is a comprehensive guide to Node.js.'
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should get all resources', async () => {
    const res = await request(app).get('/api/resources/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
