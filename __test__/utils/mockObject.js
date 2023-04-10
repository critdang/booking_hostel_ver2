const mockUser = {
  email: 'dai@gmail.com',
  password: '123456',
};
const mockUser2 = {
  fullName: 'huy@gmail.com',
  email: 'huy@gmail.com',
  password: '123456',
};
const mockUserRegister = {
  fullName: 'testRegister',
  email: 'register@gmail.com',
  password: '123456',
};
const mockUserRegister2 = {
  fullName: 'testRegister',
  email: 'register@gmail.com',
  password: '123456',
};
const mockUserForgotPassword = {
  email: 'dai@gmail.com',
};
const mockUserForgotPassword2 = {
  email: 'noExistedUser@gmail.com',
};
const mockBlockUser = {
  email: 'huy@gmail.com',
  password: '123456',
};
const mockAdminUser = {
  email: 'admin@gmail.com',
  password: 'admin'
};
const mockAdminUserAPI = {
  fullName: 'admin',
  email: 'admin@gmail.com',
  password: 'admin',
};

// MOCK BRANCH
const mockBranch = {
  name: 'testBranch',
  address: 'testAddress',
  phone: '0123456789',
  email: 'testBranch@gmail.com'
};

const mockBranchSeeder = {
  name: 'testBranch2',
  address: 'testAddress2',
  phone: '0123456789',
  email: 'testBranch2@gmail.com'
};

// MOCK CATEGORY
const mockCategorySeeder = {
  name: 'testCategory',
  thumbnail: 'testThumbnail',
  description: 'testDescription'
};

const mockCategorySeeder2 = {
  name: 'testCategory2',
  thumbnail: 'testThumbnail2',
  description: 'testDescription2'
};
// MOCK GUEST
const mockGuestSeeder = {
  fullName: 'testGuest',
  email: 'testGuest@gmail.com',
  phone: '0123456789',
  address: 'testAddress',
  status: 'active',
  gender: 'male',
  isBlocked: false,
  role: 'customer'
};

const mockGuestSeederAPI = {
  fullName: 'testGuestAPI',
  email: 'testGuestAPI@gmail.com',
  phone: '0123456789',
  address: 'testAddress',
  gender: 'male',
};

// MOCK ROOM
const mockRoomSeeder = {
  name: 'testRoom',
  price: 1000000,
};

const mockRoomSeederAPI = {
  name: 'testRoomAPI',
  price: 3000000,
};

module.exports = {
  mockUser,
  mockUserRegister,
  mockUserRegister2,
  mockUserForgotPassword,
  mockUserForgotPassword2,
  mockBlockUser,
  mockAdminUser,
  mockAdminUserAPI,
  mockUser2,
  mockBranch,
  mockBranchSeeder,
  mockCategorySeeder,
  mockCategorySeeder2,
  mockGuestSeeder,
  mockGuestSeederAPI,
  mockRoomSeeder,
  mockRoomSeederAPI
};
