const express = require("express");
const app = express();
const fs = require("fs");
var path = require("path");
var cors = require("cors");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Cache-Control", "no-cache");
  next();
});

/**
 * Read from file path
 */
app.get("/getFiledata", async (req, res) => {
  try {
    var filePath = ("C:\\Users\\lenovo\\Desktop\\Dynamic Traffic\\Project\\log.txt");  
    fpath=filePath.split(/\ /).join('\ ');
    var fileContent = fs
      .readFileSync(fpath, "utf-8")
      .split("\n")
      .filter(Boolean);
    console.log("resp", fileContent);
    res.status(200).json({ result: fileContent });
  } catch (error) {
    console.log("Error ", error);
    res.status(400).json("file not found");
  }
});

/**
 * App start at port 3001
 */
app.listen(3001, function () {
  console.log("Server Listening on port 3001");
});
