/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const { mockBlockUserSeeder, mockUser, mockAdminUser } = require('../utils/mockObject');
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
      await db.User.create(mockBlockUserSeeder);
      await db.User.update({ isBlocked: true }, { where: { email: mockBlockUserSeeder.email } });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockBlockUserSeeder.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST /block/:id
  it('[/block/:id] Block user successfully', async () => {
    const blockUser = await db.User.create(mockBlockUserSeeder);
    const res = await request(app)
      .put(`/user/block/${blockUser.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
  it('[/block/:id] get error message if no found user', async () => {
    const res = await request(app)
      .put('/user/block/3')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('No found user. Please sign up');
  });
  it('[/block/:id] get error message if no login admin', async () => {
    const res = await request(app)
      .put('/user/block/3');
    expect(res.statusCode).toBe(401);
  });
});
