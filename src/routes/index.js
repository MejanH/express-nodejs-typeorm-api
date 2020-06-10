"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_route_1 = require("./user.route");
var routes = express_1.Router();
routes.use("/users", user_route_1.default);
exports.default = routes;
