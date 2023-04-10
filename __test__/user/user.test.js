/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockUser2, mockAdminUserAPI, mockUser, mockBlockUser, mockUserRegister, mockUserRegister2, mockUserForgotPassword, mockUserForgotPassword2
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('LOGIN /user/login', () => {
  let token;
  let user;
  beforeAll(async () => {
    try {
      // [START] get user
      const userSeeder = await db.User.create(mockUser);
      console.log("🚀 ~ file: user.test.js:18 ~ beforeAll ~ userSeeder:", userSeeder);
      user = userSeeder.dataValues;
      await db.User.create(mockUser2);

      // [END] get user
      // [START] get token
      const userToken = await helperFnTest.getLoginToken();
      token = userToken.token;
      // [END] get token
      // [START] get id user
      // [END] get id user
      await db.User.create(mockBlockUser);
      await db.User.update({ isBlocked: true }, { where: { email: mockBlockUser.email } });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    // await db.User.destroy({ where: { email: mockAdminUserAPI.email } });
    // await db.User.destroy({ where: { email: mockBlockUser.email } });
    // await db.User.destroy({ where: { email: mockUserRegister.email } });
    // await db.User.destroy({ where: { email: mockUser.email } });
  });
  // TEST /register
  it('Register user successfully', async () => {
    const res = await request(app)
      .post('/user/register')
      .send(mockUserRegister);
    console.log("🚀 ~ file: user.test.js:44 ~ it ~ res:", res);
    expect(res.statusCode).toEqual(200);
    await db.User.update({ status: 'active' }, { where: { email: mockUserRegister.email } });
  });
  it('should get error message existed user', async () => {
    const res = await request(app)
      .post('/user/register')
      .send(mockUserRegister2);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch('register@gmail.com is already existed');
  });
  // TEST /login
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
  // TEST /updatePassword
  it('[/updatePassword] update password successfully', async () => {
    const res = await request(app)
      .put('/user/updatePassword')
      .set('Authorization', `Bearer ${token}`)
      .send({ email: 'dai@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch('Update password successfully');
  });
  it('[/updatePassword] get error message if account has been disable or not active', async () => {
    const res = await request(app)
      .put('/user/updatePassword')
      .set('Authorization', `Bearer ${token}`)
      .send({ email: 'EmailNotExist@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(`Cannot read property 'email' of null`);
  });
  it('[/updatePassword] get error message if no provide enough required attributes', async () => {
    const res = await request(app)
      .put('/user/updatePassword')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(500);
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
  // TEST /
  it('[/] get users info successfully', async () => {
    const res = await request(app)
      .get(`/user`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
  it('[/] get error message if no login admin', async () => {
    const res = await request(app)
      .get('/user');
    expect(res.statusCode).toBe(401);
  });
  // TEST - DELETE /:id
  it('[/] Delete users info successfully', async () => {
    const res = await request(app)
      .delete(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
  it('[/] Delete users info successfully', async () => {
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
  // TEST /forgotPassword
  it('[/forgotPassword] forgot password succesfully', async () => {
    const res = await request(app)
      .post('/user/forgotPassword')
      .send(mockUserForgotPassword);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch('Request forgot password successfully');
  });
  it('[/forgotPassword] get error message if no provided email', async () => {
    const res = await request(app)
      .post('/user/forgotPassword')
      .send({ password: 'forgotPassword' });
    expect(res.statusCode).toBe(500);
  });
  // TEST /block/:id
  it('[/block/:id] Block user successfully', async () => {
    const res = await request(app)
      .put(`/user/block/${user.id}`)
      .set('Authorization', `Bearer ${token}`);
    console.log("🚀 ~ file: user.test.js:155 ~ it ~ res:", res);
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
