const format = require("string-format");
const { Op } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');

const deleteUser = async (req) => {
  const { id } = req.params;
  await sequelize.transaction(async (t) => {
    const foundUser = await db.User.findOne({
      where: {
        id,
        role: {
          [Op.not]: 'admin'
        }
      }
    });
    if (!foundUser) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundTeamUser'), id),
      );
    }
    await db.User.destroy({ where: { id } }, { transaction: t });
  });
};

module.exports = {
  deleteUser
};
