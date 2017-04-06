var restify = require('restify');
var contacts = require('./contacts')
var port = 3000;

var server = restify.createServer({
  name : 'Nike Contacts Server'
});

server.use(function(req, res, next){
  console.log(req.method + ' ' + req.url);
  return next();
});

server.use(restify.bodyParser());

// server.get('api/contacts', contacts.get);
server.get('contacts/:name?', contacts.getByName);
server.del('contacts/:name', contacts.del);


server.listen(port, function(){
  console.log('API running at port: ' + port);
});
