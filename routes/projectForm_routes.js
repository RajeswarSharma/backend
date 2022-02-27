"use strict";
const express = require("express");
const {validationResult} = require("express-validator");
const rules = require("../middlewares/validation-rules");
const projectDbApis = require("../controllers/projectDBApis");
const router = express.Router();
// const csrf = require("csurf");
// const csrfProtection = csrf({ cookie: true });

router.post("/", rules.projectForms, async (req, res) => {
  const validationErr = validationResult(req);
  if (validationErr.isEmpty()) {
    await projectDbApis.insertProject(req, res);
  } else {
    res.jsonp({success : false, err : validationErr.array()});
  }
});
module.exports = router;