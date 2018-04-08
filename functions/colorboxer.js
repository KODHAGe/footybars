const cheerio = require('cheerio');
const request = require('request');

// test
// var poo = new Colorboxer;
// poo.get_colors('Montréal Canadiens');

function Colorboxer() {
  
  this.get_colors = function(url, callback) {
    // Get wiki page
    request('https://en.wikipedia.org/api/rest_v1/page/html/' + replaceAccents(url), function (error, response, html) {
      if (!error && response.statusCode == 200) {
        // Load content into cheerio
        const $ = cheerio.load(html);

        // Get color/colour table row data from infobox
        let tableRowData = $('.infobox th').filter(function() {
            return $(this).text() === 'Colors' || $(this).text() === 'Colours';
        }).closest('tr').children('td');

        // Color names
        let colors = tableRowData.text().trim().split(',');

        // Color hex values
        let hexes = tableRowData.children('span');
        let colorOutput;

        // Place into object (I only need the 2 first ones)
        if(colors && hexes) {
          colorOutput = {
            'primary': { 
              'name': colors[0],
              'hex': hexes.eq(0).css('background-color')
            },
            'secondary': {
              'name': colors[1],
              'hex': hexes.eq(1).css('background-color')
            }
          }
        } else {
          colorOutput = {
            'primary': { 
              'name': 'default',
              'hex': 'black'
            },
            'secondary': {
              'name': 'default',
              'hex': 'white'
            }
          }
        }
        console.log(colorOutput)
        return callback(colorOutput);
      } else {
        console.log('error sorry :(')
      }
    });
  }
}

// https://gist.github.com/jonlabelle/5375315
function replaceAccents(str){
  // verifies if the String has accents and replace them
  if (str.search(/[\xC0-\xFF]/g) > -1) {
      str = str
              .replace(/[\xC0-\xC5]/g, "A")
              .replace(/[\xC6]/g, "AE")
              .replace(/[\xC7]/g, "C")
              .replace(/[\xC8-\xCB]/g, "E")
              .replace(/[\xCC-\xCF]/g, "I")
              .replace(/[\xD0]/g, "D")
              .replace(/[\xD1]/g, "N")
              .replace(/[\xD2-\xD6\xD8]/g, "O")
              .replace(/[\xD9-\xDC]/g, "U")
              .replace(/[\xDD]/g, "Y")
              .replace(/[\xDE]/g, "P")
              .replace(/[\xE0-\xE5]/g, "a")
              .replace(/[\xE6]/g, "ae")
              .replace(/[\xE7]/g, "c")
              .replace(/[\xE8-\xEB]/g, "e")
              .replace(/[\xEC-\xEF]/g, "i")
              .replace(/[\xF1]/g, "n")
              .replace(/[\xF2-\xF6\xF8]/g, "o")
              .replace(/[\xF9-\xFC]/g, "u")
              .replace(/[\xFE]/g, "p")
              .replace(/[\xFD\xFF]/g, "y");
  }
  return str;
}

module.exports = new Colorboxer();
