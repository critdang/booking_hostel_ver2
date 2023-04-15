/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockBlockUserLogin, mockUser, mockAdminUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');

describe('LOGIN /user/login', () => {
  beforeAll(async () => {
    try {
      // [START] get user
      await db.User.create(mockUser);
      const BlockedUser = await db.User.create(mockBlockUserLogin);
      await db.User.update({ isBlocked: true }, { where: { email: BlockedUser.email } });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockBlockUserLogin.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST /login
  it('should get error message your account is blocked', async () => {
    const res = await request(app)
      .post('/user/login')
      .send(mockBlockUserLogin);
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
