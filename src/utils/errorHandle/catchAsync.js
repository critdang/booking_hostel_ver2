const catchAsync = (cb) => (req, res, next) => {
  cb(req, res, next).catch((err) => next(err));
};

module.exports = catchAsync;
