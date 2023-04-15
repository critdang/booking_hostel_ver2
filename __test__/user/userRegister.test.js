/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockExistUserRegister, mockUserRegister, mockAdminUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');

describe('LOGIN /user/login', () => {
  beforeAll(async () => {
    try {
      // [START] create user
      await db.User.create(mockUserRegister);
      // [END] create user
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUserRegister.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST /register
  it('Register user successfully', async () => {
    const res = await request(app)
      .post('/user/register')
      .send(mockUserRegister);
    expect(res.statusCode).toEqual(200);
    await db.User.update({ status: 'active' }, { where: { email: mockUserRegister.email } });
  });
  it('should get error message existed user', async () => {
    const res = await request(app)
      .post('/user/register')
      .send(mockExistUserRegister);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch('register@gmail.com is already existed');
  });
});
