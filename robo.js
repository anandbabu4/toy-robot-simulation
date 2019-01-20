#!/usr/bin/env node

"use strict";
const fs = require("fs");
const fileCmd = process.argv[2] || "test1.txt";
const inputFile = "./data/" + fileCmd;
var ToyRobot = require("./src/toy-robot");

const init = (inputFile) => {
	var robo = new ToyRobot();
	if (fs.existsSync(inputFile)) {
		fs.readFile(inputFile, "utf8", function (err, contents) {
			robo.loadData(contents);
		});
	} else {
		process.stdout.write("error: file doesn't exist in the path \n");
	}
};

// bootstrap
init(inputFile);