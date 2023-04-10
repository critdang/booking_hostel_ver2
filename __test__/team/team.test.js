/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const { mockAdminUser, mockUser } = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('TEAM /team/user/3', () => {
  let token;

  beforeAll(async () => {
    try {
      await db.User.create(mockUser);
      const user = await helperFnTest.getLoginToken();
      token = user.token;
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });

  it('get error message if No found user in team with id', async () => {
    const res = await request(app)
      .delete('/team/user/3')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch('No found user in team with id 3');
  });
});
