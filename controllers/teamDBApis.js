"use strict";
const sanitize = require("mongo-sanitize");
const team = require("../models/team");
exports.addTeam = async (req, res, secure_url, public_id) => {
  const fullname = sanitize(req.body.fullname);
  const role = sanitize(req.body.role);
  const linkedin = sanitize(req.body.linkedin);
  const instagram = sanitize(req.body.instagram);
  const github = sanitize(req.body.github);
  const newTeam = new team({
    profileImage: secure_url,
    publicId: public_id,
    fullname,
    role,
    linkedin,
    instagram,
    github,
  });
  await newTeam.save();
  res.json({ success: true, message: "new team member added" });
};

// exports.getTeam = async (res) => {
//   const teamData = await team.find();
//   res.json({ success: true, data: teamData });
// };

exports.getTeam = async () => {
  try {
    const data = await team.find();
    return data;
  } catch (err) {
    console.log(err);
  }
};
