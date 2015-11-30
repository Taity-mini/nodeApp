/**
 * Created by 1504693 on 30/11/2015.
 */
var Twitter = require("twitter");
var http = require('http');
var port = process.env.PORT || 1337;



var client = new Twitter({
    consumer_key: 'LjiTruqMhAUGJvGnFh5vTxW6d',
    consumer_secret: 'p49dXUZoTTK9QYsCjZUWLLwHgfOwHcMxtLdYD6A2bbBW9LXPdV',
    access_token_key: '475277203-p2iCEnSHHoawBHwEVzk9bHpBRk30Jjiy6UPz8jyi',
    access_token_secret:'pAKPdQdraJuQ0lK5GdSZ1ajh3Thf9f4OVtngYLK4wJoIo'
});

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});


client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
    //console.log(tweets);
    response.end(JSON.stringify(tweets));
});
}).listen(port);

