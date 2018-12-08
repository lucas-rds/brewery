import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import cors from 'cors';
import enviroment from 'dotenv';
import { Container, Truck } from './domain';
import { BeerFactory } from './factory/beer-factory';
import { BeerTypes } from './enums/beer-types';
import { TruckMonitor } from './services/monitor/truck-monitor';
import BeerRepository from './repository/beer.repository';
import Database from './database/db';

/*
    TODO: 
    Ordenar cervejas
    Gerar Temperatura randomica
    Monitorar Temperatura
    Conectar monitor temperatura com Socketio
*/

enviroment.config();
const app = express();
var server = new http.Server(app);
const io = socketio(server);

const database = new Database();
const repository = new BeerRepository(database);

app.use(cors());
app.get('/', function (req, res) {
    repository.getBeersByType()
        .subscribe(beers => {
            res.json(beers);
        });
});


io.on('connection', function newConnection() {
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
    console.log('listening on *:' + PORT);
});



repository
    .getBeersByType()
    .subscribe(beers => {
        const containers = Object.keys(beers)
            .map(type => {
                return new Container(beers[type]);
            });

        let truck = new Truck(containers);
        let truckMonitor = new TruckMonitor(truck);
        truckMonitor.start();

        setInterval(() => {
            truck.openBackDoor();
            if (truck.isDoorOpened) {
                truck.closeBackDoor();
            }
        }, 5000);
    });



