const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/send-email", emailRoutes);

module.exports = app;