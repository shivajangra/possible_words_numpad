const express = require('express');
const http = require('http');
const app = express();
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
const port = 3000;
// default options
app.use(bodyParser.json({limit: '10mb', extended: false}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
const server = http.createServer(app);
app.use(express.static(__dirname));

const KEY_PAD = ["", "", "abc", "def", "ghi", "jkl","mno", "pqrs", "tuv", "wxyz"];
const SUPER_HEROS = ["SUPERMAN", "THOR", "ROBIN", "IRONMAN", "GHOSTRIDER", "CAPTAINAMERICA", "FLASH", "WOLVERINE", "BATMAN", "HULK", "BLADE", "PHANTOM", "SPIDERMAN", "BLACKWIDOW", "HELLBOY", "PUNISHER"];

    var get_all_words = (digits) => {
        if(digits == null || digits.length == 0)
            return "No Super Hero";
            var temp = [];
            var result = [];
        get_superhero(digits,temp, result, KEY_PAD);
           let s_n = match_superhero(result);
        return s_n.length>0?s_n:'No Super Hero';
    }

    var match_superhero = (keywords) => {
        for (var i = 0; i < keywords.length; i++) {
        var superhero = SUPER_HEROS.filter(el => (el.toLowerCase() == keywords[i]));
          if(superhero.length > 0){
            return superhero;
          }
        }
        return superhero;
    }

    var get_superhero = (digits, temp, result, map) => {
      if(digits.length == 0){
          var arr = [];
          for(var i=0; i<temp.length; i++){
              arr[i] = temp[i];
          }
          result.push(arr.join(''));
          return;
      }
        var curr = parseInt(digits.substring(0,1));
        var letters = map[curr];
        for(var i=0; i<letters.length; i++){
            temp.push(letters.charAt(i));
            get_superhero(digits.substring(1), temp, result, map);
            temp.pop();
        }
    }

app.get('/getsuperhero', function(req, res) {
   res.json({data:get_all_words(req.query.text),status:200});
});
app.get('*', function(req, res) {
  res.sendFile(__dirname, 'index.html');
});
server.listen(port,() => console.log(`API running on localhost:${port}`))
