// message.js - Message service functionality
var Message = require('../../models/message');
var Palidrone = require('../../models/palidrone');
// var Message = function(id, text) {
//     this.id = id;
//     this.text = text;

//     this.say = function() {
//         log.add("User: " + this.name);
//     };
// }


module.exports = {
    getMessages: function(req, res, next) {
        var messages = [
            new Palidrone(new Message('15', 'hockey')), 
            new Palidrone(new Message('16', 'baseball')),
            {id:'33', text: 'toto'},
            new Message('44', 'zozo'),
        ];
        res.send(messages);;
    }
};