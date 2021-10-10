require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const api_routes = require("./routes/api_routes");
const auth_routes = require("./routes/auth_routes");
const admin_routes = require("./routes/admin_routes")
const cors = require("cors");
const passport = require("passport");
const hbs = require('hbs')
//-----------------------------------------------END OF IMPORTS---------------------------------------//

//-------------------------------------------DATABASE CONNECTION SETUP----------------------------------------//
const app = express();
const PORT = process.env.PORT || 3001;

// Demo database: Connect to a actual database before deployment
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at PORT: ${PORT}`);
    });
  });

// Whitelisting requests
app.use(
  cors({
    // The following address is for testing only, change it accordingly in production
    origin: "0.0.0.0",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

//----------------------------------------END OF DATABASE CONNECTION SETUP----------------------------------------//

//---------------------------------------------------MIDDLEWARES-------------------------------------------------//
// app.use(function (req, res, next) {
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SESSION_KEY],
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));
app.set('views',path.join(__dirname,'./templates/pages'))
app.set('view engine','hbs')
//------------------------------------------------END OF MIDDLEWARES--------------------------------------------//

//-----------------------------------------------------ROUTINGS-------------------------------------------------//
app.use("/api/", api_routes);
app.use("/auth/", auth_routes);
app.use("/admin/", admin_routes)
//---------------------------------------------------END OF ROUTINGS--------------------------------------------//



