import path from "path";
import express from "express";
const app = express();
import morgan from "morgan";
import stars from "./api/stars.js";
app.use(morgan("dev"));

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, "../public")));

// Routes & Middleware Here (incl. 404 middleware)
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use("/auth", require("./auth"));
app.use("/api/stars", stars);

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Middleware to serve up 500 errors for server problems here
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

export default app;
