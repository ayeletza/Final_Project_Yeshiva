var mongoose = require('mongoose');

var schema = {
    Id: String,
    FirstName: String,
    LastName: String,


}

var Graduate = mongoose.model("Graduate", schema);

module.exports =  mongoose.model('Graduate',{
    Id: String,
    FirstName: String,
    LastName: String,

});
