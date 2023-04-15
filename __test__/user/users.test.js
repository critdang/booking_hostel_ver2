/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockUser, mockAdminUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('LOGIN /user/login', () => {
  let token;
  let user;
  beforeAll(async () => {
    try {
      // [START] create user
      const userSeeder = await db.User.create(mockUser);
      user = userSeeder.dataValues;
      const userToken = await helperFnTest.getLoginToken();
      token = userToken.token;
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST /:id
  it('[/:id] get user info successfully', async () => {
    const res = await request(app)
      .get(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
  it('[/:id] get error message if no login admin', async () => {
    const res = await request(app)
      .get('/user/1');
    expect(res.statusCode).toBe(401);
  });
});
