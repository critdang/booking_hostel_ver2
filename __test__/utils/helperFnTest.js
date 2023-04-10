const request = require('supertest');
const { mockAdminUser, mockAdminUserAPI } = require("./mockObject");
const app = require("../../src/server");
const db = require('../../src/models/index');

exports.getLoginToken = async () => {
  // create Admin user
  const adminSeeder = await request(app).post('/user/register').send(mockAdminUserAPI);
  const token = adminSeeder.body.message.accessToken;
  await db.User.update({ role: 'admin' }, { where: { email: mockAdminUserAPI.email } });
  // login Admin user
  const res = await request(app)
    .post('/user/login')
    .send(mockAdminUser)
    .set('Accept', 'application/json')
    .set('Cookie', [`accessToken=${token}`]);
  return {
    token: res.body.message.accessToken,
  };
};
