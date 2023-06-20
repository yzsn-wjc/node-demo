const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const users = require("../model/user.js");

const UsersModel = mongoose.model("users", users);

// 添加用户
router.post("/save", function (req, res, next) {
  try {
    new UsersModel(req.body).save().then((result) => {
      res.send({ code: 200, data: result });
    });
  } catch (error) {
    console.log(error);
    res.send({ code: 500, message: error });
  }
});

// 获取用户列表
router.post("/get-users", function (req, res, nex) {
  try {
    const { query = {} } = req;
    UsersModel.find().then((result) => {
      console.log(result);
      res.send({ code: 200, data: result });
    });
  } catch (error) {
    console.log(error);
    res.send({ code: 500, message: error });
  }
});

// 删除用户列表
router.post("/delete", function (req, res, next) {
  try {
    UsersModel.deleteMany({ nickname: "管理员" }).then(() => {
      res.send({ code: 200, data: 111 });
    });
  } catch (error) {
    console.log(error);
    res.send({ code: 500, message: error });
  }
});

module.exports = router;
