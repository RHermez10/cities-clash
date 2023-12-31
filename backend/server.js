const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({
  path: "./config.env",
});
const port = process.env.PORT || 1338;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(require("./routes/cities"));
const dbo = require("./db/connect");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
    }
  });
  console.log("Server is running on ", port);
});
