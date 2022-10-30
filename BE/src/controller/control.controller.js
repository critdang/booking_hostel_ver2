const {
  // generateJWTForVerifyRegister,
  verifyToken,
} = require("../middleware/JWTAction");
const db = require("../models");
const service = require("../service/controlService");
const catchAsync = require("../utils/errorHandle/catchAsync");
const helperfn = require("../utils/helperFn");

const controlController = {
  changeLanguage: catchAsync(async (err, req, res) => {
    try {
      const { lang } = req.params;
      const { url } = req.query;

      res.cookie("lang", lang, { maxAge: 900000 });
      return res.redirect(url);
    } catch (e) {
      console.log(e);
      return helperfn.returnFail(req, res, e);
    }
  }),
  handleLogin: catchAsync(async (err, req, res) => {
    try {
      const { email } = req.body;
      const { password } = req.body;
      // if (!email || !password) {
      //   let err = 'Missing input parameter(s)' //use Joi to validate
      //   helperfn.returnFail(req, res, err)
      // }

      const userData = await service.handleLoginService(email, password);
      res.cookie("token", userData.token, {
        // httpOnly: true,
      });
      if (userData.errCode != 0) {
        return res.redirect(`/login?err=${userData.message}&email=${email}`);
      }

      req.session.isAuth = true;
      return res.redirect("/");
    } catch (e) {
      console.log(e);
      return helperfn.returnFail(req, res, e);
    }
  }),

  handleUpdateUser: catchAsync(async (req, res) => {
    const data = req.body;
    if (data) {
      const user = await service.handleUpdateUser(data);
      console.log(user.message);
      return res.redirect("display-all-users");
    }
    const err = "invalid get query";
    return helperfn.returnFail(req, res, err);
  }),
  createUser: async (req, res) => {
    try {
      req.body.image = req.file.originalname;
      const data = await service.createUser(req.body, req.file);
      if (data.errCode) {
        const msg = data.message;
        return res.render("login/signup", {
          msg,
          data: data.data,
        });
      }

      // const { id } = data.user;
      // const emailToken = generateJWTForVerifyRegister(id);
      // const url = `http://localhost:8080/user/confirmation/${emailToken}`;
      // let message = service.sendMail(url)
      // if (message) {
      //   return res.send(message + '\nplease go to the email to confirm registry')
      // }
      // else {
      //   console.log(message);
      //   return res.send(message + '\nsend email fail!')
      // }
      return res.redirect("/login?success=Sign up successfully");
    } catch (error) {
      return res.send(error);
    }
  },
  displayUsers: async (req, res) => {
    const userId = req.query.id;
    const data = await service.getAllUsers(userId);
    res.render("user/displayUsers", {
      data: data.users,
    });
  },
  updateUser: async (req, res) => {
    const userId = req.query.id;
    const data = await service.updateUser(userId);
    res.render("user/updateUserById", {
      data: data.user,
    });
  },
  deleteUser: async (req, res) => {
    const userId = req.query.id;
    const response = await service.deleteUser(userId);
    if (!response.errCode) res.redirect("display-all-users");
    else console.log(response.message);
  },
  confirmRegister: async (req, res) => {
    try {
      const { id: userId } = verifyToken(req.params.token);
      console.log(userId);
      const user = await db.User.update(
        { status: "success" },
        {
          where: { id: userId },
        },
      );
      console.log(user);
      res.send("Verify complete");
    } catch (e) {
      res.send(e);
    }
  },
  handleLogout: catchAsync(async (req, res) => {
    try {
      return req.session.destroy((err) => {
        if (err) throw err;
        return res.redirect("/");
      });
    } catch (e) {
      console.log(e);
      return helperfn.returnFail(req, res, e);
    }
  }),
};
module.exports = controlController;
