"use strict";
const  sanitize  = require("mongo-sanitize");
const Project = require('../models/project');
const mailer = require("./mailer");
//--------------------------------END OF
//IMPORTS---------------------------------------//
exports.insertProject = async (req, res) => {
    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const sDetails = sanitize(req.body.details);
    try {
        const project = new Project({
        email,
        name,
        details: sDetails,
        });
        await mailer.projectAck(project.email, project.name);
        await project.save();
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};
