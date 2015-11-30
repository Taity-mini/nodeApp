/**
 * Created by 1504693 on 30/11/2015.
 */
var Twitter = require("twitter");
var http = require('http');
var port = process.env.PORT || 1337;

//Adding url parameters
var url = require('url');



var client = new Twitter({
    consumer_key: 'LjiTruqMhAUGJvGnFh5vTxW6d',
    consumer_secret: 'p49dXUZoTTK9QYsCjZUWLLwHgfOwHcMxtLdYD6A2bbBW9LXPdV',
    access_token_key: '475277203-p2iCEnSHHoawBHwEVzk9bHpBRk30Jjiy6UPz8jyi',
    access_token_secret:'pAKPdQdraJuQ0lK5GdSZ1ajh3Thf9f4OVtngYLK4wJoIo'
});

http.createServer(function(request, response){


    var querydata = url.parse(request.url, true).query;
    var search = querydata.q;

    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });


    client.get('search/tweets', {q: search}, function(error, tweets){
    console.log(tweets);
    var json = [];
        for (var i =0; i< tweets.statuses.length ; i++)
        {
             json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }

    response.end(JSON.stringify(json));
});
}).listen(port);

