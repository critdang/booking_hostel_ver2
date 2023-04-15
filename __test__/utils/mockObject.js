const mockUser = {
  email: 'dai@gmail.com',
  password: '123456',
};
const mockUser2 = {
  fullName: 'huy@gmail.com',
  email: 'huy@gmail.com',
  password: '123456',
};
const mockUserDelete = {
  fullName: 'deleteUser',
  email: 'deleteUser@gmail.com',
  password: '123456',
};
const mockUserRegister = {
  fullName: 'testRegister',
  email: 'register@gmail.com',
  password: '123456',
};
const mockExistUserRegister = {
  fullName: 'testRegister',
  email: 'register@gmail.com',
  password: '123456',
};
const mockUserForgotPassword = {
  email: 'forgotPassword@gmail.com',
};
const mockUserForgotPassword2 = {
  email: 'noExistedUser@gmail.com',
};
const mockBlockUserLogin = {
  email: 'blockUserLogin@gmail.com',
  password: '123456',
};
const mockBlockUserSeeder = {
  fullName: 'BlockUserSeeder',
  email: 'mockBlockUserSeederUser@gmail.com',
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
  mockUserDelete,
  mockUserRegister,
  mockExistUserRegister,
  mockUserForgotPassword,
  mockUserForgotPassword2,
  mockBlockUserLogin,
  mockBlockUserSeeder,
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
