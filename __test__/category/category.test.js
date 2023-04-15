/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockCategorySeeder2, mockCategorySeeder, mockAdminUser, mockUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('CATEGORY /category', () => {
  let token;
  let category;
  beforeAll(async () => {
    try {
      await db.User.create(mockUser);
      const user = await helperFnTest.getLoginToken();
      token = user.token;
      category = await db.Category.create(mockCategorySeeder);
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
    await db.Category.destroy({ where: { name: mockCategorySeeder.name } });
  });
  // TEST-CREATE-branch /branch
  // it('create a branch', async () => {
  //   const res = await request(app)
  //     .post(`/branch`)
  //     .send(mockBranchSeeder)
  //     .set('Authorization', `Bearer ${token}`);
  //   expect(res.statusCode).toEqual(200);
  // });
  // it('get error if no provided enough attributes', async () => {
  //   const res = await request(app)
  //     .post(`/branch`)
  //     .send({ name: 'branch1' })
  //     .set('Authorization', `Bearer ${token}`);
  //   expect(res.statusCode).toEqual(500);
  // });

  // TEST-POST-branches /branch

  it('create category successfully', async () => {
    const res = await request(app)
      .post('/category')
      .field("name", "testcategory12")
      .set('Content-Type', 'multipart/form-data')
      .set('Authorization', `Bearer ${token}`)
      .attach('thumbnail', '__test__/img/cat.jpg');
    expect(res.statusCode).toEqual(200);
  });

  it('get error if missing category thumbnail', async () => {
    const res = await request(app)
      .post('/category')
      .send(mockCategorySeeder)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('Missing category thumbnail');
  });
  // TEST-GET-branches /branch
  it('get categories successfully', async () => {
    const res = await request(app)
      .get('/category');
    expect(res.statusCode).toEqual(200);
  });
  // TEST-GET-branch /branch/:id
  it('get category successfully', async () => {
    const res = await request(app)
      .get('/category/100');
    expect(res.statusCode).toEqual(400);
  });
  // TEST-DELETE-branch /branch/:id
  it('delete category successfully', async () => {
    const createCategory = await db.Category.create(mockCategorySeeder2);
    const res = await request(app)
      .delete(`/category/${createCategory.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Delete category successfully');
    await db.Category.destroy({ where: { name: mockCategorySeeder2.name } });
  });
  it('get error if categoryId delete unsuccessfully', async () => {
    const res = await request(app)
      .delete(`/category/100`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('Delete category fail with id 100');
  });
});
