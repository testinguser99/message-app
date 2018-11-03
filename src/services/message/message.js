// message.js - Message service functionality

module.exports = {
    getMessages: function(req, res, next) {
        res.send([{
            id: '1',
            text: 'some text',
            palidrome: false
        }])
    }
};