module.exports = {
    health: function(req, res, next) {
        res.send({
            status: 'ok'
        });
    }
};