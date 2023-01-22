// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT;
const blogsController = require("./controllers/blogs_controller");
const userController = require("./controllers/User_controller");
const authController = require("./controllers/auth_controller");
const cors = require("cors")
const bodyParser = require("body-parser")

// User = require("./models/user");


mongoose.set("strictQuery", true);
//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`);
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Express Settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

app.use("/blogs", blogsController);

app.use("/user", userController);

app.use("/auth", authController);

app.use(express.static(path.join(__dirname, "my-app", "public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "my-app", "public", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on`, PORT);
});