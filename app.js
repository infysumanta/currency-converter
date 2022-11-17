require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/api/v1/", routes);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is Listening at PORT ${port}`);
});
