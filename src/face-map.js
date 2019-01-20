const resultFace = {
	"north": {
		left: "west",
		right: "east"
	},
	"east": {
		left: "north",
		right: "south"
	},
	"south": {
		left: "east",
		right: "west"
	},
	"west": {
		left: "south",
		right: "north"
	}
};

module.exports = resultFace;