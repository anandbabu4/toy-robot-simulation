# toy-robot-simulation
The application is a simulation of a toy robot moving on a square table top, of dimensions 5
units x 5 units. There are no other obstructions on the table surface. The robot is free to
roam around the surface of the table, but must be prevented from falling to destruction.
Any movement that would result in the robot falling from the table must be prevented,
however further valid movement commands must still be allowed.

Allowed commands:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

Note: This application is built with Node.js.

Installation:
-----------
    git clone https://github.com/anandbabu4/toy-robot-simulation.git

Pre-requisites: (commands to install: node_modules, eslint and jest)
-----------
    npm install
    npm install eslint --save-dev
    npm install --save-dev jest

Run lint:
-----------
    npm run lint

Run unit test: (coverage report displayed in CLI)
-----------
    npm test

Run program with input file: (exclude folder path)
-----------
    npm run file <filename>
    eg: npm run file test1.txt

Example Input and Output
------------------------

### Example a: test1.txt

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b: test2.txt

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c: test3.txt

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH