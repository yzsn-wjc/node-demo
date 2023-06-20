const express = require("express");

const usersRouter = require("./user");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("请求了");
  res.send("啦啦啦啦啦");
});

const getRouter = (app) => {
  console.log("---------");
  app.use("/api/user", usersRouter);
  return router;
};

module.exports = getRouter;
