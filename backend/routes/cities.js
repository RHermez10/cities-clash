const express = require("express");

const recordRoutes = express.Router();

// connect to db
const dbo = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;

//Get all hamsters
recordRoutes.route("/hamsters").get(function (req, res) {
  let db_connect = dbo.getDb("HamstersDB");
  db_connect
    .collection("Hamsters")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//Get 2 random hamster
recordRoutes.route("/hamsters/random").get(function (req, res) {
  let db_connect = dbo.getDb("HamstersDB");
  db_connect
    .collection("Hamsters")
    .find({})
    .toArray(function (err, result) {
      let cityOneId = Math.floor(Math.random() * result.length);

      let randomCityOne = result[cityOneId];
      result.splice(cityOneId, 1);

      let cityTwoId = [Math.floor(Math.random() * result.length)];
      let randomCityTwo = result[cityTwoId];

      let randomCities = [randomCityOne, randomCityTwo];
      if (err) throw err;
      res.json(randomCities);
    });
});

//Get hamster by id
recordRoutes.route("/hamsters/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {
    _id: ObjectId(req.params.id),
  };
  db_connect.collection("Hamsters").findOne(myquery, function (err, result) {
    if (err) {
      res.status(404);
    }
    res.json(result);
  });
});

// create new hamster
recordRoutes.route("/hamsters/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let newCharacter = {
    name: req.body.name,
    country: req.body.country,
    description: req.body.description,
    imgName: req.body.imgName,
    wins: 0,
    defeats: 0,
    games: 0,
  };
  db_connect
    .collection("Hamsters")
    .insertOne(newCharacter, function (err, res) {
      if (err) throw err;
      response.json(newCharacter);
    });
});
// Update hamster by id
recordRoutes.route("/hamsters/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {
    _id: ObjectId(req.params.id),
  };

  let updatedCharacter = {
    $set: {
      wins: req.body.wins,
      defeats: req.body.defeats,
      games: req.body.games,
    },
  };
  db_connect
    .collection("Hamsters")
    .updateOne(myquery, updatedCharacter, function (err, result) {
      if (err) {
        res.status(400).json("not working");
      }
      res.sendStatus(200);
    });
});

//Delete hamster by id
recordRoutes.route("/hamsters/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {
    _id: ObjectId(req.params.id),
  };
  db_connect.collection("Hamsters").deleteOne(myquery, function (err, result) {
    if (err) {
      res.status(400);
    }
    res.sendStatus(200);
  });
});

module.exports = recordRoutes;
