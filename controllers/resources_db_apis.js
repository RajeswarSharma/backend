"use strict";
const cloudinaryConfig = require("../configs/cloudinary_config");
const resources = require("../models/resources");
const sanitize = require("mongo-sanitize");
const mailer = require("./mailer");

exports.insert_resource = async (req, res, imageURL, public_id) => {
  const uploadResult = await cloudinaryConfig.v2.uploader.upload(
    req.file.path,
    {
      folder: `resources/${req.body.category}`,
      use_filename: true,
      resource_type: "auto",
    }
  );
  const { secure_url, public_id_1 } = uploadResult;
  const title = sanitize(req.body.title);
  const subtitle = sanitize(req.body.subtitle);
  const description = sanitize(req.body.description);
  const category = sanitize(req.body.category);
  const newResources = new resources({
    imageSrc: imageURL,
    imageId: public_id,
    title,
    subtitle,
    description,
    category,
    resources: secure_url,
    resourcesId: public_id_1,
  });
  try {
    //await mailer.applicationAck(email, role, name);
    await newResources.save();
    res.json({ success: true, message: "Resource Added Successfully!" });
  } catch (error) {
    await cloudinaryConfig.uploader.destroy(newResources.resourcesId);
    throw error;
  }
};

exports.getResources = async (res) => {
    const resourcesData = await resources.find();
    res.json({ success: true, data: resourcesData });
};
