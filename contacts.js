function ContactsController(){
  var that = this;
  that.list =
    [
      {
        name: 'Dana',
        phone: '432-987-9874',
        address: '504 Milbury Lane',
        email: 'dana.haines@aol.com'
      },
      {
        name: 'Dana',
        phone: '333-985-8437',
        address: '987 Crescent Ave',
        email: 'dana.haines@aol.com'
      },
      {
        name:'Brian',
        phone: '487-866-8365',
        address: '333 Cherry Hill',
        email: 'brian.turloff@gmail.com'

      },
      {
        name: 'Rachelle',
        phone: '498-873-8766',
        address: '555 West Adison Drive',
        email: 'rachelle.nicks@compuserve.com'
      }
    ];

  var getContactsByName = function(req){
    var contacts = [];

    that.list.filter(function(p){
      if(p.name.toLowerCase() === req.params.name.toLowerCase())
      contacts.push(p);
    });
    return contacts;
  }

  that.getByName = function(req, res, next){
    console.log(req.params.name);
    if(req.params.name){
      var contacts = getContactsByName(req);
    }else {
      var contacts = that.list;
    }
    if(contacts.length > 0){
      res.send(200, contacts);
    }
    else{
      res.send(404, "Contact not found");
    }
  }

  that.del = function(req, res, next){
    var didDelete = false;

    that.list = that.list.filter(function(p){
      if(p.name.toLowerCase() !== req.params.name.toLowerCase())
        return p;
      else
        didDelete = true;
    });
    if(didDelete)
      res.send(200, req.params.name + " deleted");
    else
      res.send(404, req.params.name + " not found. Did not delete");
  }
};
module.exports = new ContactsController();
