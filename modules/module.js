var fs =require("fs");
module.exports= function(dirName,extName, callback){



fs.readdir(dirName,function(err,data){
    if (err) {
       return callback(err);
        
    }
    var regxtest= new RegExp('.+\.'+extName+'$');
    data=data.filter(function(elem){
        return regxtest.test(elem)
    })
    callback(null,data)
})
}