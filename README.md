# toy-robot-simulation
The application is simulation of a toy robot moving on a square table top

Installation:
-----------
    git clone https://github.com/anandbabu4/toy-robot-simulation.git

Pre-reqisites: (if node_modules, eslint and jest is not installed)
-----------
    npm install
    npm install eslint --save-dev
    npm install --save-dev jest

Run unit test: (coverage report displayed in cli)
-----------
    npm test

Run program with input file (ignore the data folder name just filename is enough)
-----------
    npm run file test1.txt
    npm run file test2.txt
    npm run file test3.txt

Example Input and Output
------------------------

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH