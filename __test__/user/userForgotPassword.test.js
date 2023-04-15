/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockUser, mockUserForgotPassword, mockAdminUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('LOGIN /user/login', () => {
  let user;
  beforeAll(async () => {
    try {
      // [START] create user
      const userSeeder = await db.User.create(mockUser);
      await db.User.update({ status: 'active' }, { where: { email: mockUser.email } });
      user = userSeeder.dataValues;
      // [END] create user
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST /forgotPassword
  it('[/forgotPassword] forgot password succesfully', async () => {
    const res = await request(app)
      .post('/user/forgotPassword')
      .send({ email: `${user.email}` });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch('Request forgot password successfully');
  });
  it('[/forgotPassword] get error messagey if email is not found', async () => {
    const res = await request(app)
      .post('/user/forgotPassword')
      .send(mockUserForgotPassword);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('User is not active or not found');
  });
  it('[/forgotPassword] get error message if no provided email', async () => {
    const res = await request(app)
      .post('/user/forgotPassword')
      .send({ password: 'forgotPassword' });
    expect(res.statusCode).toBe(500);
  });
});
