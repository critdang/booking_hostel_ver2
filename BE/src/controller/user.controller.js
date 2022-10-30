const { verifyToken } = require("../middleware/JWTAction");
const db = require("../models");
// const catchAsync = require("../../utils/errorHandle/catchAsync");
// const helperfn = require("../../utils/helperFn");

const userPage = async (req, res) => {
  try {
    const { id: userId } = verifyToken(req.cookies.token);
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    });
    res.render("information", {
      user,
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = { userPage };
