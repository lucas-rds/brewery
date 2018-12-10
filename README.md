# Therm Brewery 2000

Project created as a simulation of a case where a truck driver must know the temperature of all containers inside the truck.

This project uses Javascript as main language, with a NodeJS backend and Angular FrontEnd.

# Backend

The backend's folder is: "thermtrip-simulator-2000"

## Dependencies
A full list of dependencies can be found on package.json.

Nodemon is necessary to be installed globally with:
`` npm install nodemon -g ``

Install the dependencies with the commands:
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


# About

In this implementation I tried to use a lot of Rxjs, to learn more about the tool. I used socketio to do the real communication and simulate as if the truck had iot devices connected within the containers. I Also used jest to learn it, looks like a great test framework, and I never used it before. The system is also typed with typescript.

The system is supposed to be simple, and the layers are separeted in core and infra.

Core is about domain and bussiness logic, and Infra is all about IoC, databases and repos.

# Roadmap

In the future, the coverage must be increased, actually there are no integration and end-to-end tests in both back and front ends.

Some log mechanism also need to be implemented, i would use wiston, as it is a great log tool.

To add a real database is a great idea. Maybe a lighweight NoSql solution.

# Other info
As it is just a simulation, there's no email, sound, shake or anything robust to tell the driver that the containers got out of the temperature range.
When that happens, the container display will become red, so the driver knows about the problem.

The ui display could be some device coupled into the truck or even a app for smartphones.