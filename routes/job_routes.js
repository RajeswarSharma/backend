"use strict";
const express = require("express");
const router = express.Router();
const {uploadDoc} = require("../configs/multer_config");
const jobDBApis = require("../controllers/jobDBApis");
router.post("/apply", uploadDoc.single("resume"), async (req, res) => {
  try {
    await jobDBApis.addJobApplication(req, res);
  } catch (error) {
    res.json({
      err : error.message,
      success : false,
      message : "Form submission failed",
    });
  }
});
module.exports = router;
