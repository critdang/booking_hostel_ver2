const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');

const createBranch = async (req) => {
  const inputData = req.body;
  // create newBranch
  const newBranch = await db.Branch.create(inputData);
  if (!newBranch) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotCreateBranch')),
    );
  }
  return newBranch;
};

const getBranches = async (req) => {
  // const sort = objToArr(req.query);
  const conditions = req.query;
  const foundBranches = await db.Branch.findAll(
    {
      where: conditions,
      // invoice: sort
    }
  );
  if (foundBranches.length === 0) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindBranches')),
    );
  }
  return foundBranches;
};

const getBranch = async (req) => {
  const { id } = req.params;
  const roomFetch = await db.Branch.findOne({
    where: { id },
  });
  if (!roomFetch) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundBranch'), id),
    );
  }
  return roomFetch;
};

const updateBranch = async (req) => {
  const { id } = req.params;
  const updateContents = req.body;
  const result = await db.Branch.update(
    updateContents,
    {
      where: { id },
    }
  );
  if (result[0] === 0) {
    throw new AppError(
      format(MessageHelper.getMessage('noBranchUpdated'))
    );
  }
};

module.exports = {
  getBranches, getBranch, updateBranch, createBranch
};
