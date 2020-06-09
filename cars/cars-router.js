const express = require('express');
const knex = require('knex');

const db = require('../data/connection.js')

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car list' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).first()
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car' });
        });
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
        .then(ids => {
            db('cars').where({ id: ids[0] })
                .then(newCar => {
                    res.status(201).json(newCar);
                });
        })
        .catch(err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store car" });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('cars').where({ id }).update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'car information updated' })
            } else {
                res.status(404).json({ message: "car could not be updated" })
            }
        }).catch(error => {
            console.log("GET / error", error);
            res.status(500).json({ message: error.message });
        });

});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db("cars")
        .where({ id })
        .del()
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "car deleted successfully" });
            } else {
                res.status(404).json({ message: "No car with that ID was found" });
            }
        })
        .catch(error => {
            console.log("GET / error", error);
            res.status(500).json({ message: error.message });
        });
});

module.exports = router;