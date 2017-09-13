console.log('gros boulet');

var http = require('./node_modules/http-server/lib/http-server.js');

var url = require('./node_modules/url-join/lib/url-join.js');

var server = http.createServer(function(req, res){

    var page = url.parse(req.url).pathname;

    console.log(page);

    res.writheHead(200, {"Content-Type": "text/html"});

    if (page == '/') {
        
                res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
        
            }
        
            else if (page == '/sous-sol') {
        
                res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
        
            }
        
            else if (page == '/etage/1/chambre') {
        
                res.write('Hé ho, c\'est privé ici !');
        
            }
    
    res.end('merci et aurevoir');

});

server.listen(8080);