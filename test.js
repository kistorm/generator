/**
 * Created by  on 2017/4/11.
 */
var createCodeTest = require('./createCodeTest');
var sequelizeAutoTest = require('./sequelizeAutoTest');
var async = require('async');
//var db = require('./../config/config.json').bpet;
// var db = require('./../config/config.json').localhost;
/*createCodeTest.createCode({
    tableName:'user'
},function(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
});*/
// var option = {
//     db:db.database,
//     userName:db.username,
//     password:db.password,
//     host:db.host,
//     directory:'./../models/xx_db' //model路径
//     //tables:[]        //指定表则带上tables参数，不带tables参数则
// };


var option = {
    dbName: 'bpet',
    host: '127.0.0.1',
    port: '3306',
    userName: 'root',
    password: 'root',
    directory:'./models/xx_db'
};

sequelizeAutoTest.createModel(option,function(error,result){
        if(error){
            return console.log(error);
        }
        var tableNameList = [];
        for(var name in result){
            tableNameList.push(name);
        }
        console.error(tableNameList)
        // async.forEachSeries(tableNameList,function(tableName,callback){
        //     createCodeTest.createCode({tableName:tableName},function(error,data){
        //         if(error){
        //             return callback(error);
        //         }
        //         callback(null,data);
        //     })
        //
        // },function(error,createCodeResult){
        //     if(error){
        //         console.log(error)
        //     }
        //     //console.log(createCodeResult)
        // })
});