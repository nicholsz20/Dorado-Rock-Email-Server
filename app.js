const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(express.json());
const corsOptions = {
    origin: ['https://doradorockllc.com', 'http://localhost:3000', 'https://8595-2603-6080-61f0-1300-3159-e5b1-bc04-9c.ngrok.io'],
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

app.use("/send-email", emailRoutes);

module.exports = app;