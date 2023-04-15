/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockUser2, mockAdminUser, mockUser
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
      await db.User.create(mockUser2);
      // [END] create user
      // [START] get Token
      const userToken = await helperFnTest.getLoginToken();
      token = userToken.token;
      // [END] get Token
    } catch (error) {
      console.log("🚀 ~ file: userDelete.test.js:26 ~ beforeAll ~ error:", error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST - DELETE /:id
  it('[/] Delete users info successfully', async () => {
    const res = await request(app)
      .delete(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
  it('[/] Delete users info unsuccessfully', async () => {
    const res = await request(app)
      .delete(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('No found user. Please sign up');
  });
  it('[/] get error message if no login admin', async () => {
    const res = await request(app)
      .delete('/user/2');
    expect(res.statusCode).toBe(401);
  });
});
