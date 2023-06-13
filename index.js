const express = require("express");
const app = express();
app.set("view engine", ".html");
app.use(requestTime);

app.get("/", (req, res) => {
  res.render("HomePage");
});

const userRouter = require("./routes/route");
app.use("/", userRouter);

const currentdate = new Date();

function requestTime(req, res, next) {
  console.log(req.originalUrl, currentdate.getDay());
  if (
    currentdate.getHours() > 9 &&
    currentdate.getHours() < 20 &&
    currentdate.getDay() > 0 &&
    currentdate.getDay() < 6
  )
    next();
}
const port = 4000;
app.listen(port, () => {
  console.log(`server work in the port ${port}`);
});
