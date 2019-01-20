"use strict";

var ToyRobot    = require("../toy-robot");

it("check initial config: placed to be false", () => {
	var toyRobot = new ToyRobot();
	expect(toyRobot.placed).toBeFalsy();
});

it("check initial config: x, y to be null", () => {
	var toyRobot = new ToyRobot();
	expect(toyRobot.x).toBeNull();
	expect(toyRobot.y).toBeNull();
});

it("check initial config: facing to be null", () => {
	var toyRobot = new ToyRobot();
	expect(toyRobot.face).toBeFalsy();
});

it("load data file: place the robot", () => {
	var toyRobot = new ToyRobot();
	var rowData  = "PLACE 0,0,NORTH";
	toyRobot.loadData(rowData);
	expect(toyRobot.placed).toBeTruthy();
});

it("check valid place cmd: yes", () => {
	var toyRobot = new ToyRobot();
	const posValid = toyRobot.checkPlaceCmd("PLACE 0,0,NORTH");
	expect(posValid).toBeTruthy();
});

it("ignore if invalid place cmd: PLACE 0,0,MOON", () => {
	var toyRobot = new ToyRobot();
	toyRobot.placeRobot("PLACE 0,0,MOON");
	expect(toyRobot.placed).toBeFalsy();
});

it("place robot in table for valid cmd: PLACE 1,2,NORTH", () => {
	var toyRobot = new ToyRobot();
	toyRobot.placed = false;
	toyRobot.placeRobot("PLACE 1,2,NORTH");
	expect(toyRobot.placed).toBeTruthy();
});

it("turn direction if robo not placed: skip ", () => {
	var toyRobot = new ToyRobot();
	toyRobot.placed = false;
	toyRobot.turnDirection("NORTH");
	expect(toyRobot.placed).toBeFalsy();
});

it("turn direction if robo placed: ok ", () => {
	var toyRobot = new ToyRobot();
	toyRobot.placed = true;
	toyRobot.x = 0;
	toyRobot.y = 0;
	toyRobot.face = "NORTH";
	toyRobot.turnDirection("LEFT");
	expect(toyRobot.face.toUpperCase()).toEqual("WEST");
});

it("report position: 0,1,NORTH", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 0,0,NORTH", "MOVE", "REPORT"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.x).toBe(0);
	expect(toyRobot.y).toBe(1);
	expect(toyRobot.face.toUpperCase()).toEqual("NORTH");
});

it("report position when robot is not placed: return false", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 0,0,UP", "MOVE", "REPORT"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.placed).toBe(false);
});

it("move ahead if robo not placed: return false ", () => {
	var toyRobot = new ToyRobot();
	toyRobot.placed = false;
	toyRobot.moveAhead();
	expect(toyRobot.placed).toBeFalsy();
});

it("move ahead if placed: y is 0 ", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 0,0,NORTH", "MOVE", "RIGHT", "MOVE", "RIGHT", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.y).toBe(0);
});

it("move ahead if robo is placed: y is 0", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 0,0,SOUTH", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.y).toBe(0);
});

it("move ahead if robo placed: x is 0 ", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 0,0,WEST", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.x).toBe(0);
});

it("move ahead if robo placed: x is 3 ", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 2,3,EAST", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.x).toBe(3);
});

it("move ahead if robo is placed: x is 2 ", () => {
	var toyRobot = new ToyRobot();
	toyRobot.placed = true;
	toyRobot.x = 1;
	toyRobot.y = 1;
	toyRobot.face = "EAST";
	toyRobot.moveAhead();
	expect(toyRobot.x).toBe(2);
});

it("move ahead if robo is placed: 3,3,NORTH ", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}
	expect(toyRobot.x).toBe(3);
	expect(toyRobot.y).toBe(3);
	expect(toyRobot.face.toUpperCase()).toBe("NORTH");
});

it("check position: x is 4 ", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 4,2,WEST", "MOVE", "LEFT", "MOVE", "LEFT", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.x).toBe(4);
});

it("check position: y is 1 ", () => {
	var toyRobot = new ToyRobot();
	const input = ["PLACE 0,0,NORTH", "MOVE"];
	for(var i in input){
		toyRobot.handleCmd(input[i]);
	}

	expect(toyRobot.y).toBe(1);
});