const mongoose = require("mongoose");

const users = new mongoose.Schema({
  nickname: String, // 该表内有一个 nickname 表头, 是 String 类型
  age: Number, // 该表内有一个 age 表头, 是 Number 类型
  createTime: {
    // 该表内 有一个 createTime 表头, 有多条限制
    type: Date, // 类型为 Date
    default: new Date(), // 默认是当前时间
  },
  password: {
    type: String,
    require: true, // 必填
  },
  hobby: Array,
  gender: {
    type: String,
    enum: ["男", "女", "不确定"], // 枚举, 该属性的值只能是该数组内的成员, 其他的不行
  },
});

module.exports = users;
