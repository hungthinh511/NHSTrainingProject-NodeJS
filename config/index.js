var configValues = require("./config");


module.exports = {
    getDbConnectionString: function(){
        return "mongodb://"+configValues.username+":"+configValues.password +"@ds123956.mlab.com:23956/nodetestdb"
        
    }
}