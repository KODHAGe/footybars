const functions = require('firebase-functions');
const unirest = require('unirest');
const getColors = require('get-image-colors');
const request = require('request');
const fs = require('fs');

let results = [];
let meta = {
  "matchdays": 0,
  "league": ""
}
unirest.post('http://api.football-data.org/v1/competitions/445/leagueTable')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json', 'X-Auth-Token': process.env.FD_API_KEY})
.method('GET')
.end(function (response) {
  meta.matchdays = response.body.matchday - 1;
  meta.league = response.body.leagueCaption;
  let standing = response.body.standing;
  for (let i in standing) {
    let team = {"team": standing[i].teamName, "crest": standing[i].crestURI, "points": []};
    if (!fs.existsSync('./dl')){
      fs.mkdirSync('./dl');
    }
    download(standing[i].crestURI, './dl/img_'+i+'.svg', function(){
      getColors('./dl/img_'+i+'.svg').then(colors => {
        team['colors'] = colors.map(color => color.hex())
      })
    });
    results.push(team);
  }
  getNextDay(1,meta.matchdays)
  fs.writeFileSync('./data.json', results , 'utf-8'); 
});

function getNextDay(i, matchdays) {
  unirest.post('http://api.football-data.org/v1/competitions/445/leagueTable/?matchday=' + i)
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json', 'X-Auth-Token': process.env.FD_API_KEY})
  .method('GET')
  .end(function (response) {
    let standing = response.body.standing;
    for (let i in standing) {
      let team = results.find( function(element) {
        return element.team == standing[i].teamName;
      })
      team.points.push(standing[i].points)
    }
    if(i < matchdays) {
      getNextDay(i + 1, meta.matchdays);
    }
    //console.log(results);
  })
}

function download(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
