
const unirest = require('unirest');
const moment = require('moment');
const fs = require('fs');
const wtf = require('wtf_wikipedia');
const namedColors = require('color-name-list');
const colorboxer = require('./colorboxer.js');
const request = require('request');

let results = [];
let meta = {'date' : moment().format("YYYY-MM-DD")};
unirest.post("https://statsapi.web.nhl.com/api/v1/standings?date=" + meta.date)
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.method('GET')
.end(function (response) {
  for (let i in response.body.records) {
    for (let n in response.body.records[i].teamRecords) {
      let team = {"team": response.body.records[i].teamRecords[n].team.name, "points": [response.body.records[i].teamRecords[n].points], "matchesLeft": response.body.records[i].teamRecords[n].gamesPlayed};
      results.push(team);
    }
  }
  results.sort(function(a, b){
    if (a.points[0] > b.points[0])
      return -1;
    if (a.points[0] < b.points[0])
      return 1;
    return 0;
  })
  console.log(results)
  getNextDay(1)
})

function getNextDay(i) {
  date = moment(meta.date).subtract(i, 'd').format("YYYY-MM-DD");
  unirest.post("https://statsapi.web.nhl.com/api/v1/standings?date=" + date)
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .method('GET')
  .end(function (response) {
    let ones = [];
      for (let i in response.body.records) {
        for (let n in response.body.records[i].teamRecords) {
          let team = results.find( function(element) {
            return element.team == response.body.records[i].teamRecords[n].team.name;
          })
          if(team.matchesLeft === 1) {
            ones.push(1);
          } else if(team.matchesLeft > response.body.records[i].teamRecords[n].gamesPlayed) {
            team.points.push(response.body.records[i].teamRecords[n].points)
            team.matchesLeft = response.body.records[i].teamRecords[n].gamesPlayed;
          }
        }
      }
    console.log(i)
    console.log(ones.length + "|" + results.length)
    if(ones.length < results.length - 1) {
      getNextDay(i + 1);
    } else {
      getLogos(function(res){
        fs.writeFileSync('./nhl.json', JSON.stringify(res) , 'utf-8'); 
        //console.log(results);
      })
    }
  })
}

function getLogos(callback) {
  for (let i in results) {
    results[i].points = results[i].points.reverse();
    colorboxer.get_colors(results[i].team, function(colors){
      results[i].primary = colors.primary.hex;
      results[i].secondary = colors.secondary.hex; 
    });
    wtf.from_api(results[i].team, 'en', function(wikimarkup) {
      var data = wtf.parse(wikimarkup);
      results[i].crest = "https://en.wikipedia.org/wiki/Special:Redirect/file/" + data.infoboxes[0].data.logo_image.text;
      console.log(i + " logos")
      callback(results)
    });
  }
}
