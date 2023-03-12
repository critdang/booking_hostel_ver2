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
    missingParams: '{} is missing',
    invalidParams: '{} is invalid',
    invalidDate: '{} is invalid date format',
    missingToken: 'Missing token',

    // authentication
    noFoundUser: 'No found user. Please sign up',
    wrongPassword: 'Wrong password. Please try again',
    emailNotExisted: 'Email is not existed',
    accountExisted: 'Email, User Name or phone number is existed',
    certificateInvalid: 'Your phone/email/username or password is incorrect!',
    certificateNotExisted: 'Your phone/email or username is incorrect!',
    oldPassIncorrect: 'Old password is incorrect',
    providedPassword: 'Please provide password',
    verifyUserFailed: 'Verify user failed',
    verifyUserSuccess: 'Verify user success',
    expiredToken: 'Your token is expired. Please login again',
    refreshTokenNotFound: 'Refresh Token is not found',
    // user
    resetPasswordSucess: 'Reset password success',
    forgotPasswordFailed: 'This email is expired. Please use the latest email',
    // createUser
    existUser: '{} is already existed',
    // forgotPassword
    userNotActiveOrFound: '{} is not active or not found',
    requestForgotPasswordSuccess: 'Request forgot password successfully',

    // updateProfile
    updateProfileSuccess: 'Update profile successfully',
    updateAvatarSuccess: 'Update avatar successfully',
    updatePasswordSuccess: 'Update password successfully',

    // room
    createRoomSuccess: 'Create room successfully',
    updateRoomSuccess: 'Update room successfully',
    noRoomUpdated: 'No room update successfully',
    noFoundRoom: 'No room found with id {}',
    deleteRoomSuccess: 'Delete room successfully',
    roomIsExisted: 'Room is existed',
    cannotFindRoom: 'Cannot find room with these params',
    noFoundImageRoom: 'No image room found with imgId {}',
    noDeleteImageRoom: 'No image room delete with productId {}',
    setDefaultImageRoomSuccess: 'Set default image room successfully',
    deleteImageRoomSuccess: 'Delete image room successfully',
    roomDateAlreadyExisted: 'The room is already booked from {} to {}',

    // category
    createCategorySuccess: 'Create category successfully',
    createCategoryFail: 'Create category fail',
    categoryIsExisted: 'Category is existed',
    noFoundCategories: 'No categories found',
    noFoundCategory: 'No category found with id {}',
    deleteCategorySuccess: 'Delete category successfully',
    deleteCategoryFailId: 'Delete category fail with id {}',

    // invoice
    noFoundInvoice: 'No invoice found with id {}',
    noFoundInvoiceWithCode: 'No invoice found with code {}',
    noFoundInvoices: 'No invoices found',
    updateStatusOderFailed: 'Update invoice failed',
    updateInvoiceFailed: 'Update invoice failed',
    creatInvoiceSuccess: 'Create invoice successfully',

    // guest
    cannotFindGuests: 'Cannot find guests',
    cannotFindGuestsWithId: 'Cannot find guests with id {}',
    deleteGuestSuccess: 'Delete guest successfully',

    // team
    noFoundTeamUser: 'No found user in team with id {}',
    deleteUserInTeamSuccess: 'Delete user in team successfully',
  }
};
