"use strict";
const mongoose = require("mongoose");
const resourcesSchema = mongoose.Schema({
    imageSrc: {
        type: String,
        require: true,
        trim: true,
    },
    imageId: {
        type: String,
        require: true,
        trim: true,
    },
    title: {
        type: String,
        require: true,
        trim: true,
    },
    subtitle: {
        type: String,
        require: true,
        trim: true,
    },
    resources: {
        type: String,
        require: true,
    },
    resourcesId: {
        type: String,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    category: {
        type: String,
        require: true,
        enum: [
            "DSA",
            "CP",
            "web-development",
            "languages",
            "aiml",
            "database",
            "security", 
            "version control",
            "mobile-development",
            "cloud",
        ],
    },
});

//--------------------------------END RESOURCES
//SCHEMA---------------------------------------//
//----------------------------------DB
//MIDDLEWARES-----------------------------------------//
// For invalid Date range
resourcesSchema.pre("save", async function (next) {
    const uploadDate = this.date_start;
    const date = this.date.now();
    if (date > uploadDate) {
      // Removes the uploaded resources
      await cloudinaryConfig.uploader.destroy(this.imageId);
      throw new Error("Invalid upload date");
    } else {
      next();
    }
  });
  //--------------------------------END OF DB
  //MIDDLEWARES-----------------------------------------//
  const Resources = new mongoose.model("resources", resourcesSchema);
  module.exports = Resources;
  
