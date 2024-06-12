"use strict";
const { check } = require("express-validator");
//--------------------------------END OF
//IMPORTS---------------------------------------//

// validation rules for contact forms
exports.contactForms = [
  check("fullname")
    .trim()
    .notEmpty()
    .withMessage("Fullname is required")
    .matches(/^[a-zA-Z*$]/)
    .withMessage("Only characters with white space are allowed"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email address"),
  check("subject").trim().notEmpty().withMessage("Subject is empty"),
  check("message").trim().notEmpty().withMessage("Message is be empty"),
];

exports.signupform = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required")
    .isEmail()
    .withMessage("Invalid Email address"),
  check("firstname")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .matches(/^[a-zA-Z*$]/)
    .withMessage("Only characters with white space are allowed"),
  check("lastname")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .matches(/^[a-zA-Z*$]/)
    .withMessage("Only characters with white space are allowed"),
  check("password").notEmpty().withMessage("Password should not be empty"),
];

exports.projectForms = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .matches(/^[a-zA-Z*$]/)
    .withMessage("Only characters with white space are allowed"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email address"),
  check("details")
    .trim()
    .notEmpty()
    .withMessage("Details is required"),
];