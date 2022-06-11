const fs = require("fs");
const axios = require("axios").default;
require('dotenv').config()


exports.getPlayersByTeamOnSource = (team_id, team_name) => {
  const options = {
    method: "GET",
    url: process.env.URL,
    params: {team_id: team_id, sport_id: "1", locale: "en_GB"},
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      fs.writeFile(
        `data/squad/${team_name}.json`,
        JSON.stringify(response.data),
        "utf8",
        function (err) {
          if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
          }
          console.log("JSON file has been saved.");
        }
      );
    })
    .catch(function (error) {
      console.error(error);
    });
};