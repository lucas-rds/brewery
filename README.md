# Therm Brewery 2000

Project created as a simulation of a case where a truck driver must know the temperature of all containers inside the truck.

This project uses Javascript as main language, with a NodeJS backend and Angular FrontEnd.

# Backend

The backend's folder is: "thermtrip-simulator-2000"

## Dependencies
A full list of dependencies can be found on package.json.

Install the dependencies with the command:
`` npm install ``

## Tests
The tests are writen using [Jest](https://jestjs.io/), and the coverage is generated automatically on the coverage/ folder when the tests are executed. 

To run the tests run the command:
`` npm test ``

## Start
To start the application simply run: `` npm start `` or if you want the watch version, run: `` npm run serve ``

The application will be listening in port 8080.

Make sure to use an up to date browser, as the application use technologies like websockets.

# Frontend

The frontend's folder is: "thermtrip-simulator-2000-ui"

## Dependencies
A full list of dependencies can be found on package.json.
Install the dependencies with the command:
`` npm install ``

## Tests
The tests are writen using the default Angular frameworks: [Karma](https://karma-runner.github.io/latest/index.html) and [Jasmine](https://jasmine.github.io/), and the coverage is generated running the command: ``ng test --code-coverage``

To run the tests run the command:
`` npm test `` or `` ng test ``

## Start
To start the application simply run: `` npm start `` or `` ng serve ``

The application will be listening in port 4200

