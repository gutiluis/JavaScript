#!/usr/bin/env node
const fs = require("fs");


const get_raw_string = fs.readFileSync("stylesheets.json", "utf8");
const turn_into_object = JSON.parse(get_raw_string);

console.log(turn_into_object.what_is_stylesheets);
