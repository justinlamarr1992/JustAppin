const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
require("dotenv").config();
const { readdirSync } = require("fs");
//app
const app = express();
// Database
mongoose
  .connect(process.env.DATABASEONLINE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));
//   Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());
// Route Middleware
// readdirSync("./functions/routes").map((r) =>
//   app.use("/api", require("./routes/" + r))
// );
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));
// port
// const port = 8000;
// app.listen(port, () => console.log(`Server is running on ${port}`));
app.get("/Hello", (req, res, next) => {
  res.status(200).send("Welcome to Firebase");
});
exports.app = functions.https.onRequest(app);
