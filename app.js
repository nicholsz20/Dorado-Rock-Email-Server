const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(express.json());
const corsOptions = {
    origin: ['https://doradorockllc.com', 'http://localhost:3000'],
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

app.use("/send-email", emailRoutes);

module.exports = app;