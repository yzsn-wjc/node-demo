### 易报错点

1、要在 app.js 设置模板，views 的目录，并且创建 error 文件

```js
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
```

2、启动/结束 MongoDB

```js
// 运行
mongod --dbpath xxxx
// 结束
运行MongoDB服务器的命令行窗口中按下Ctrl+C组合键
```
