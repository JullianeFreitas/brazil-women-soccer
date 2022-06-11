const fs = require("fs");
const source = require('./sourceController')

exports.getPlayersByTeam = (req, res, next) => {
 // source.getPlayersByTeamOnSource('GKpN8J07', 'palmeiras')


  var dir = `data/squad/${req.params.teamName}.json`
  try {
    let rawdata = fs.readFileSync(dir);
    let players = JSON.parse(rawdata);
    res.status(200).send(players);

  } catch (error) {
    console.error(error);
  }
};

exports.getPlayersByPosition = (req, res, next) => {
  // source.getPlayersByTeamOnSource('GKpN8J07', 'palmeiras')
 
 
   var dir = `data/squad/${req.params.teamName}.json`
   try {
     let rawdata = fs.readFileSync(dir);
     let players = JSON.parse(rawdata);

     var filteredPlayers = players.DATA.filter(d => d.GROUP_LABEL == req.params.position);
     res.status(200).send(filteredPlayers);
 
   } catch (error) {
     console.error(error);
   }
 };