const express = require("express");
const apiRoute = require("./routes/apiRoute");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use("/v1/api", apiRoute);

module.exports = app;
