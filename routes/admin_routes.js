"use strict";
const express = require("express");
const auth_admin = require("../controllers/auth_admin");
const db_apis = require("../controllers/event_db_apis");
const jwt = require("jsonwebtoken");
const cloudinaryConfig = require("../configs/cloudinary_config").v2;
const { uploadImage } = require("../configs/multer_config");
const { uploadDoc } = require("../configs/multer_config");
const teamDBApis = require("../controllers/teamDBApis");
const resourcesDBApis = require("../controllers/resources_db_apis");
//----------------------------------END of
//IMPORTS------------------------------------//
const router = express.Router();
//-------------------------------------ADMIN
//ROUTES----------------------------------//
// sends form to add event

router.get("/add-events", (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(500).json({ message: "Opps!Something went wrong" });
      } else if (decoded === process.env.ADMIN_NAME) {
        res.render("./add-events");
      } else {
        res.redirect("./login");
      }
    });
  } else {
    res.redirect("./login");
  }
});
// saves form to the database
router.post("/add-events", uploadImage.single("cover"), (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, async (err, decoded) => {
      if (err) {
        //res.status(500).json({ message: "Opps! Something went wrong" });
        res.render("error", {
          message: "Opps! Something went wrong, can't verify the Admin",
        });
      } else if (decoded === process.env.ADMIN_NAME) {
        try {
          const result = await cloudinaryConfig.uploader.upload(req.file.path, {
            folder: "event covers",
            use_filename: true,
          });
          const { secure_url, public_id } = result;
          await db_apis.insert_event(req, secure_url, public_id);
          //res.status(200).send("uploaded");
          res.render("./add-events", { message: "Event added" });
        } catch (error) {
          res.status(403).send(error.message);
        }
      } else {
        res.redirect("./login");
      }
    });
  } else {
    res.redirect("./login");
  }
});
/* Render the team submission form */
router.get("/add-team", (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(500).json({ message: "Opps!Something went wrong" });
      } else if (decoded === process.env.ADMIN_NAME) {
        res.render("add-team");
      } else {
        res.redirect("./login");
      }
    });
  } else {
    res.redirect("./login");
  }
});

/* Render the resources submission form */
router.get("/add-resources", (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(500).json({ message: "Oops! Something went wrong" });
      } else if (decoded === process.env.ADMIN_NAME) {
        res.render("add-resources");
      } else {
        res.redirect("./login");
      }
    });
  } else {
    res.redirect("./login");
  }
})
/* Handle team submit form request*/
router.post("/add-team", uploadImage.single("profileImage"), (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, async (err, decode) => {
      if (err) {
        res.render("error", { message: "Something went wrong" });
      } else if (decode === process.env.ADMIN_NAME) {
        try {
          const result = await cloudinaryConfig.uploader.upload(req.file.path, {
            folder: "profile-images",
            use_filename: true,
          });
          const { secure_url, public_id } = result;
          await teamDBApis.addTeam(req, res, secure_url, public_id);
        } catch (error) {
          res.render("error", { message: "Profile can't be added" });
        }
      } else {
        res.redirect("./login");
      }
    });
  }
});

/* Handle resources submit form request*/
router.post("/add-resources", uploadDoc.single("resources"), uploadImage.single("imageSrc"), (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, async (err, decode) => {
      if (err) {
        res.render("error", { message: "Something went wrong" });
      } else if (decode === process.env.ADMIN_NAME) {
        try {
          const result = await cloudinaryConfig.uploader.upload(req.file.path, {
            folder: "resources",
            use_filename: true,
          });
          const { secure_url, public_id } = result;
          await resourcesDBApis.insert_resource(req, res, secure_url, public_id);
        } catch (error) {
          res.render("error", { message: "Resources can't be added" });
        }
      } else {
        res.redirect("./login");
      }
    });
  }
});

// sends admin login form
router.get("/login", (req, res) => {
  if (req.cookies.auth) {
    jwt.verify(req.cookies.auth, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.render("error", { message: "Opps! Something went wrong" });
      } else if (decoded === process.env.ADMIN_NAME) {
        res.redirect("./add-events");
      } else {
        res.render("login");
      }
    });
  } else {
    res.render("login");
  }
});

router.post("/login", (req, res) => {
  auth_admin.auth(req, res);
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("./login");
});
//---------------------------------------------END OF
//ROUTES------------------------------------//
module.exports = router;
