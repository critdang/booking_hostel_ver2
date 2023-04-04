/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const { mockAdminUser } = require('../../src/utils/mockObject');
const db = require('../../src/models/index');
const helperFn = require('../../src/utils/helperFn');

describe('LOGIN /team/user/3', () => {
  let token;
  beforeAll(async () => {
    try {
      const user = await helperFn.getLoginToken();
      token = user.token;
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    // await db.User.destroy({ where: { email: mockAdminUser.email } });
  });

  it('get error message if no found user in team with the given id', async () => {
    const res = await request(app)
      .delete('/team/user/3')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toMatch('No found user in team with id!');
  });
});
