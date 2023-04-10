/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockBranchSeeder, mockBranch, mockAdminUser, mockUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('BRANCH /branch', () => {
  let token;
  let branch;
  beforeAll(async () => {
    try {
      await db.User.create(mockUser);
      const user = await helperFnTest.getLoginToken();
      token = user.token;
      branch = await db.Branch.create(mockBranchSeeder);
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
    await db.Branch.destroy({ where: { name: mockBranch.name } });
  });
  // TEST-CREATE-branch /branch
  it('create a branch', async () => {
    const res = await request(app)
      .post(`/branch`)
      .send(mockBranchSeeder)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if no provided enough attributes', async () => {
    const res = await request(app)
      .post(`/branch`)
      .send({ name: 'branch1' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(500);
  });
  // TEST-GET-branches /branch
  it('get branches successfully', async () => {
    await db.Branch.create(mockBranch);
    const res = await request(app)
      .get('/branch')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    await db.Branch.destroy({ where: { name: mockBranch.name } });
  });
  it('get error if no login admin', async () => {
    const res = await request(app)
      .get('/branch');
    expect(res.statusCode).toEqual(401);
  });
  // TEST-GET /branch/:id
  it('get specific branch', async () => {
    const res = await request(app)
      .get(`/branch/${branch.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
  it('get error if no found specific branch', async () => {
    const res = await request(app)
      .get('/branch/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch('No branch found with id 1');
  });
  // TEST-UPDATE /branch/:id
  it('update branch successfully', async () => {
    const res = await request(app)
      .put(`/branch/${branch.id}`)
      .send({ name: 'branch1' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch('Update branch successfully');
  });
  it('get error if no updated branch ', async () => {
    const res = await request(app)
      .put(`/branch/100`)
      .send({ name: 'branch1' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
  });
});
