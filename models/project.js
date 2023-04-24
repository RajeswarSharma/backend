"use strict"
const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    details: {
        type: String,
        require: true,
        trim: true,
    },
    expire_at: { type: Date, default: Date.now, expires: 5256000 },
});
projectSchema.index({ expire_at: 1 }, { expireAfterSeconds: 0 });
const Project = mongoose.model("project", projectSchema);
module.exports = Project;