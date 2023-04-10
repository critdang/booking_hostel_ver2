/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockGuestSeeder, mockGuestSeederAPI, mockAdminUser, mockUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('CATEGORY /category', () => {
  let token;
  let guest;
  beforeAll(async () => {
    try {
      await db.User.create(mockUser);
      const user = await helperFnTest.getLoginToken();
      token = user.token;
      guest = await db.User.create(mockGuestSeeder);
      await db.User.update({ role: 'guest' }, { where: { email: mockGuestSeeder.email } });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
    await db.User.destroy({ where: { email: mockGuestSeeder.email } });
    await db.User.destroy({ where: { email: mockGuestSeederAPI.email } });
  });
  // TEST-GET-guests /guest
  it('get Guests successfully', async () => {
    const res = await request(app)
      .get(`/guest`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if no login admin', async () => {
    const res = await request(app)
      .get(`/guest`);
    expect(res.statusCode).toEqual(401);
  });
  // TEST-GET-branch /guest
  it('get Guests successfully', async () => {
    const res = await request(app)
      .get(`/guest/${guest.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if Guests successfully', async () => {
    const res = await request(app)
      .get(`/guest/100`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('Cannot find guests with id 100');
  });
  // TEST-CREATE-branch /guest
  it('create guest successfully', async () => {
    const res = await request(app)
      .post('/guest')
      .send(mockGuestSeederAPI)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if no provide enough attribues', async () => {
    const res = await request(app)
      .post('/guest')
      .send({ address: 'testGuestAPI' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(500);
  });
  // TEST-UPDATE-branch /guest
  it('update guest successfully', async () => {
    const res = await request(app)
      .put(`/guest/${guest.id}`)
      .send({ address: 'updateTestGuest' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if the provided guest id is wrong', async () => {
    const res = await request(app)
      .put(`/guest/100`)
      .send({ address: 'updateTestGuest' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('Cannot find guests with id 100');
  });
  // TEST-DELETE-branch /guest
  it('delete guest successfully', async () => {
    const res = await request(app)
      .delete('/guest')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if delete guest unsuccessfully with the provided id', async () => {
    const res = await request(app)
      .delete('/guest/100')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('Cannot find guests with id 100');
  });
});
