"use strict";
let resultFace    = require("./face-map");
/**
 * ToyRobot class 
 */
class ToyRobot{

	constructor(){
		this.placed = false;
		this.x     = null;
		this.y     = null;
		this.face  = null; 
	}

	loadData(data){
		var inpArray = data.toString().split("\n");
		for(var i in inpArray) {
			this.handleCmd(inpArray[i].toUpperCase());
		}
	}

	checkPlaceCmd(cmd){
		var inputCmd = cmd.split(" ")[0];
		if ( inputCmd === "PLACE" ) {
			return true;
		}
		return false;
	}

	placeRobot(cmd){
		var arr = cmd.split(",").map(function(d) {
			return d.replace("PLACE ", "");
		});

		if (!resultFace.hasOwnProperty(arr[2].toLowerCase())) return false;

		if (parseInt(arr[0]) >= 0 && 
        parseInt(arr[0]) <= 4 && 
        parseInt(arr[1]) >= 0 && 
        parseInt(arr[1]) <= 4) {
			this.x = parseInt(arr[0]);
			this.y = parseInt(arr[1]);
			this.placed = true;
			this.face = arr[2];
			//console.log(this);     
			return this;
		}
    
	}

	handleCmd(cmd){
		var inputCmd = cmd.trim().toUpperCase();
		switch(true){
		case (this.checkPlaceCmd(inputCmd)):
			this.placeRobot(inputCmd);
			break;
		case ((inputCmd == "LEFT") || (inputCmd == "RIGHT")) :
			//console.log('turn:' + inputCmd);
			this.turnDirection(inputCmd);
			break;
		case (inputCmd === "MOVE") :
			this.moveAhead();
			break;
		case (inputCmd === "REPORT") : 
			this.reportPosition();
			break;
		}
	}

	moveAhead() {
		//console.log('move: :' + this.placed);
		if (this.placed) {
			switch (this.face.toLowerCase()) {
			case "north":
				if (this.y + 1 <= 4)
					this.y++;
				break;
			case "east":
				if (this.x + 1 <= 4)
					this.x++;
				break;
			case "south":
				if (this.y - 1 >= 0)
					this.y--;
				break;
			case "west":
				if (this.x - 1 >= 0)
					this.x--;
				break;
			}
		}
	}
  
	reportPosition() {
		if (!this.placed) {
			process.stdout.write("Robot is not placed yet. \n");
			return;
		}
        
		process.stdout.write(
			"################################################" + "\n" +
            "Report: " + this.x + "," + this.y + "," + this.face.toUpperCase() + "\n" +
            "################################################"); 

	}


	turnDirection(cmd) {
		// Ignore command if robot is not yet placed
		if (!this.placed) {
			return;
		}

		let currFace = this.face.toLowerCase();
		let currCmd  = cmd.toLowerCase();
		let dirKey = resultFace.hasOwnProperty(currFace);
		//console.log('dir key: '+ dirKey);
		if(dirKey){
			this.face = resultFace[currFace][currCmd];
		}
    
		return this;
	}
}

module.exports = ToyRobot;