
var db = require("../models");
const router = require("express").Router();


router.get('/api/teams/', (req, res) => {
  db.Teams.findAll({
    include: [db.Players]
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
  });
});


router.post('/api/players/', (req, res) => {
  db.Players.create(req.body).then(function (dbPlayer) {
    res.json(dbPlayer);
  });
});

router.post('/api/teams', (req, res) => {
  db.Teams.create(req.body).then(function (dbTeam) {
    res.json(dbTeam);
  });
});

// router.get('/api/players/:teamId', (req, res) => {
//   db.Players.findAll({
//     where: 
//     {teamId: req.params.teamId}
//   }).then(function (dbSportRes) {
//     res.json(dbSportRes);

//   });
// });

  
// router.get('/api/townsports/:sportId', (req, res) => {
//   db.TownSports.findAll({
//     where: 
//     {sportId: req.params.sportId},
//     include: [db.Leagues]
//   }).then(function (dbSportRes) {
//     res.json(dbSportRes);

//   });
// });

// router.get('/api/sports', (req, res) => {
//   db.Sports.findAll({}).then(function (dbSportRes) {
//     res.json(dbSportRes);
//  
//   });
// });

// router.get('/api/sports/:sport', (req, res) => {
// db.Sports.findOne({
//   where: 
//   {sport: req.params.sport},
//   include: [db.Towns]
// }).then(function (dbSportRes) {
//   res.json(dbSportRes);
// });
// });


// router.get('/api/towns', (req, res) => {
// db.Towns.findAll({
//  include: [db.Sports]
 
// }).then(function (dbSportRes) {
//   res.json(dbSportRes);
//   console.log(dbSportRes);
// });
// });



// router.get('/api/leagues/:tsId', (req, res) => {
// db.Leagues.findAll({
//   where: 
//   {TownSportId: req.params.tsId},
//   include: [db.Players]
// }).then(function (dbSportRes) {
//   res.json(dbSportRes);
//   console.log(dbSportRes);
// });
// });
module.exports = router;








  
  // app.get('/api/leagues/:townsportid', (req, res) => {
  //   db.Leagues.findAll({
  //      where: 
  //     {TownSportId: req.params.townsportid},
   
  //   }).then(function (dbSportRes) {
  //     res.json(dbSportRes);
  //     console.log(dbSportRes);
  //   });
  // });
  
  



// var db = require("../models");
// // const express = require("express");
// // const bodyParser = require("body-parser");
// //const Op = db.Sequelize.Op;


// module.exports = function (app) {

//   app.get('/api/sports', (req, res) => {
//     db.Sports.findAll({
//     }).then(function (dbSportRes) {
//       res.json(dbSportRes);
//       console.log(dbSportRes);
//     });
//   });
  
//   app.get('/api/sports/:sport', (req, res) => {
//     db.Sports.findOne({
//       where: 
//       {sport: req.params.sport},
//       include: [db.Towns]
//     }).then(function (dbSportRes) {
//       res.json(dbSportRes);
//       console.log(dbSportRes);
//     });
//   });
  
//   app.get('/api/towns', (req, res) => {
//     db.Towns.findAll({
//      include: [db.Sports]
     
//     }).then(function (dbSportRes) {
//       res.json(dbSportRes);
//       console.log(dbSportRes);
//     });
//   });
  
  
  
//   // app.get('/api/townsports/:id', (req, res) => {
//   //   db.TownSports.findOne({
//   //     where: 
//   //     {id: req.params.id},
//   //     include: [db.Leagues]
//   //   }).then(function (dbSportRes) {
//   //     res.json(dbSportRes);
//   //     console.log(dbSportRes);
//   //   });
//   // });
  
//   app.get('/api/townsports/:sportId', (req, res) => {
//     db.TownSports.findAll({
//       where: 
//       {sportId: req.params.sportId},
//       include: [db.Leagues]
//     }).then(function (dbSportRes) {
//       res.json(dbSportRes);
//       console.log(dbSportRes);
//     });
//   });
  
//   // app.get('/api/leagues/:townsportid', (req, res) => {
//   //   db.Leagues.findAll({
//   //      where: 
//   //     {TownSportId: req.params.townsportid},
   
//   //   }).then(function (dbSportRes) {
//   //     res.json(dbSportRes);
//   //     console.log(dbSportRes);
//   //   });
//   // });
  
  
  
//   app.get('/api/teams/:leagueId', (req, res) => {
//     db.Teams.findAll({
//       where: 
//       {LeagueId: req.params.leagueId},
//       include: [db.Players]
//     }).then(function (dbSportRes) {
//       res.json(dbSportRes);
//       console.log(dbSportRes);
//     });
//   });
// };