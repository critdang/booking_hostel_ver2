module.exports = {
  messages: {
    // common
    internalError: 'Internal server error',
    permissionDenied: 'Permission denied',
    notFound: '{object} not found',
    duplicateKey: 'Duplicate key',
    objectIsExisted: '{value} is existed',

    // token
    noTokenProvided: 'No token provided',
    tokenInvalid: 'Token is invalid',
    tokenExpired: 'Token is expired',
    tokenIsUsed: 'Token is used',

    // params
    missingParams: '{param} is missing',
    invalidParams: '{param} is invalid',
    invalidDate: '{param} is invalid date format',

    // authentication
    loginFailed: 'Email or password is incorrect',
    emailNotExisted: 'Email is not existed',
    accountExisted: 'Email, User Name or phone number is existed',
    certificateInvalid: 'Your phone/email/username or password is incorrect!',
    certificateNotExisted: 'Your phone/email or username is incorrect!',
    oldPassIncorrect: 'Old password is incorrect',

    // createUser
    existUser: '{} is already existed',
  }
};
