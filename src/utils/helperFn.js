const bcrypt = require('bcrypt');

// exports.returnSuccess = (req, res, code) => {
//   res.status(200).json({
//     code: 200,
//     status: "success",
//   });
// };

exports.returnSuccess = (req, res, code, data = "") => {
  res.status(200).json({
    code: 200,
    status: "success",
    data,
  });
};

exports.returnFail = (req, res, err) => {
  res.status(400).json({
    code: err.statusCode ? err.statusCode : "404",
    status: err.status ? err.status : "error",
    message: err.message,
  });
};

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};
