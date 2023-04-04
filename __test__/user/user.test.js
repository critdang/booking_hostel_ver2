/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const { mockUser, mockBlockUser } = require('../../src/utils/mockObject');
const db = require('../../src/models/index');

describe('LOGIN /user/login', () => {
  beforeAll(async () => {
    try {
      await db.User.create(mockUser);
      await db.User.create(mockBlockUser);
      await db.User.update({ isBlocked: true }, { where: { email: mockBlockUser.email } });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockBlockUser.email } });
  });
  // it('get error message if no provided email', async () => {
  //   const res = await request(app)
  //     .post('/user/login')
  //     .send({ password: 'test' });
  //   expect(res.status).toEqual(500);
  //   expect(res.body.error).toMatch('"email" is required');
  // });

  // it('get error message if no provided password', async () => {
  //   const res = await request(app)
  //     .post('/user/login')
  //     .send({ email: 'test@gmail.com' });
  //   expect(res.statusCode).toEqual(400);
  //   expect(res.body.message).toMatch('Please provide email and password!');
  // });
  it('should get error message your account is blocked', async () => {
    const res = await request(app)
      .post('/user/login')
      .send(mockBlockUser);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch('Your account has been disabled or not active yet , please contact admin');
  });
  it('should get error message if password not correct', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({ ...mockUser, password: 'wrongPassword' });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('Wrong password. Please try again');
  });
  it('get error message if email not correct', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({ email: 'EmailNotExist@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('No found user. Please sign up');
  });
});
