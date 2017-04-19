/**
 * Created by user on 2017/4/19.
 */
/**
 * Created by shuai.jin on 2017/4/10.
 * 根据表结构生成Model
 */
var config = require('./generator-conf.js')();
var SequelizeAuto = require('sequelize-auto');
var createModels = function(){
    var option = config.db;
    var auto = new SequelizeAuto(option.dbName, option.userName,option.password,option.option);
    auto.run(function(err){
        if(!err){
            var tableNameList = [];
            for(var name in auto.tables){
                tableNameList.push(name);
            }
            console.log(tableNameList)
            return console.log("building models compiled!");
        }
        console.log("building models err!",err.e.stack);
    });
}

createModels();