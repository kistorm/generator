/**
 * Created by shuai.jin on 2017/4/10.
 * 根据表结构生成Model
 */
var SequelizeAuto = require('sequelize-auto');



var createModel = function(param,callback){
    var directory = param.directory ||'./../models/xx_db';
    var db = param.dbName ||'test';  //test
    var userName = param.userName||'root';  //root
    var password = param.password||'xk123wow';  //xk123wow
    var host = param.host||'localhost';    //localhost
    //var tables = param.tables||[];
    var option = {
        host: host,
        dialect: 'mysql',
        port: '3306',
        directory: directory, //指定路径的话必须带上directory参数,
        //tables:tables         //指定表需写入表格名（['table1','table2']），注释掉则输出所有表model
    };
    //console.log(option)
    if(param.tables){
        option.tables = param.tables;
    }
    var auto = new SequelizeAuto(db, userName, password,option);

    auto.run(function (err) {
        if(err){
            return callback(err);
        }
        //if (err) throw err;
        callback(null,auto.tables);
    });
}



module.exports = {
    createModel:createModel
}



