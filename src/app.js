"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function (connection) {
    var app = express();
    app.use(express.json());
    app.use("/", routes_1.default);
    // start express server
    app.listen(5000, function () {
        console.log("Server is running on http://localhost:5000/");
    });
})
    .catch(function (error) { return console.log(error); });
