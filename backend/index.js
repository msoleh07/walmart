// imported
const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { rt } = require("./routes/product");
const { users } = require("./routes/user");
require("colors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// connect to database
connect(process.env.MONGOOSE_URL)
  .then((res) => console.log("Mongoose is running".bgGreen))
  .catch((err) => console.log("Mongodb is error".bgRed));

// home page
app.get("/", (req, res) => res.send(`<h2>Wellcom to website</h2>`));

// routes
app.use(rt);
app.use("/user", users);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`App is running => http://localhost:${PORT}`.bgCyan);
});
