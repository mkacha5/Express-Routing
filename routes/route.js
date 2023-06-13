const express = require("express");
const router = express.Router();

router.get("/services", (req, res) => {
  res.render("OurServices");
});

const newLocal = "/contact";
router.get(newLocal, (req, res) => {
  res.render("ContactUs");
});

module.exports = router;
