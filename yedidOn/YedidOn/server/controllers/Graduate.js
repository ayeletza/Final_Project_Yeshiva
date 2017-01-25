var Graduate = require('YedidOn/server/models/Graduate.js');
var Graduates = {
    read: function(req, res, next){
        res.json({type: "Read", id: req.params.id});
    }}