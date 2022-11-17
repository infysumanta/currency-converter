require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const app = express();
const port = process.env.PORT || 5000;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is Listening at PORT ${port}`);
});
