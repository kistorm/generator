/**
 * Created by  on 2017/4/11.
 */

var fs = require('fs');

var createCode = function(param,callback){
    var tableName=param.tableName;
    var letter = (tableName.substring(0,1)).toUpperCase();
    var className =letter+tableName.substring(1,tableName.length);
    var code;
    var fileName = './../service/'+tableName+'Service.js';
    code=' var sequelize = require("sequelize");' +
        ' var xx = require("./../models/xx_db");'+
        ' var '+className+' = xx.'+tableName+';' +
        ' \r\n\r\n\r\n' +
        ' //获取列表' +
        ' \r\n'+
        ' var get'+className+'List = function(param,callback){' +
        ' var where = param.where;' +
        ' var group = param.group||"";' +
        ' var order = param.order||[];' +
        ' var limit = param.limit || 20;' +
        ' var offset = param.offset || 0;' +
        ' '+className+'.findAll({' +
        ' where:where,' +
        ' group:group,' +
        ' order:order,' +
        ' limit:limit,' +
        ' offset:offset,' +
        ' raw: true' +
        ' })' +
        ' .then(function('+tableName+'){ ' +
        ' if(!'+tableName+'){' +
        ' return callback({message:""}); ' +
        ' }' +
        ' callback(null,'+tableName+');' +
        ' }) ' +
        ' .catch(function(error){' +
        ' callback(error);' +
        ' })}' +
        '\r\n\r\n\r\n'+
        ' //获取列表，可分页 ' +
        '\r\n' +
        ' var get'+className+'ListAndCount = function (param, callback) {' +
        ' var where = param.where;' +
        ' var group = param.group || "";' +
        ' var order = param.order || []; ' +
        ' var limit = param.limit || 20;' +
        ' var offset = param.offset || 0;' +
        ' '+className+'.findAndCountAll({ ' +
        ' where: where,' +
        ' group: group,' +
        ' order: order,' +
        ' limit: limit,' +
        ' offset: offset,' +
        ' raw: true' +
        ' })' +
        ' .then(function ('+tableName+') {' +
        ' if (!'+tableName+') {' +
        ' return callback({message: ""});' +
        ' }' +
        ' callback(null, '+tableName+');' +
        ' })' +
        ' .catch(function (error) {' +
        ' callback(error); ' +
        ' })' +
        ' }' +
        ' \r\n\r\n\r\n' +
        ' //查询单条数据 ' +
        ' \r\n' +
        ' var get'+className+' = function(param,callback){' +
        ' var where = param.where;' +
        ' var group = param.group || "";' +
        ' '+className+'.find({' +
        ' where: where,' +
        ' group: group,' +
        ' raw: true ' +
        ' })' +
        ' .then(function ('+tableName+') {' +
        ' if (!'+tableName+') {' +
        ' return callback({message: ""});' +
        ' }' +
        ' callback(null, '+tableName+'); ' +
        ' })' +
        ' .catch(function (error) {' +
        ' callback(error); ' +
        ' })' +
        ' }' +
        ' \r\n\r\n\r\n'+
        ' //修改' +
        ' \r\n' +
        ' var update'+className+' = function(param,callback){' +
        ' var update = param.update;  //将被修改的对象' +
        ' \r\n' +
        ' var where = param.where;' +
        ' '+className+'.update(update,{where:where})' +
        ' .then(function('+tableName+'){' +
        ' callback(null,'+tableName+');' +
        ' })' +
        '  .catch(function(error){' +
        ' callback(error);' +
        ' })' +
        ' }' +
        '\r\n\r\n\r\n' +
        ' //添加' +
        ' \r\n' +
        ' var add'+className+' = function(param,callback){' +
        ' var add = param.add;' +
        ' '+className+'.create(add)' +
        ' .then(function('+tableName+'){' +
        ' callback(null,'+tableName+');' +
        ' })' +
        ' .catch(function(error){' +
        ' callback(error);' +
        ' })'+
        ' }' +
        '  module.exports = {' +
        ' get'+className+'List:get'+className+'List,' +
        ' get'+className+'ListAndCount: get'+className+'ListAndCount,' +
        ' get'+className+':get'+className+',' +
        ' update'+className+':update'+className+',' +
        ' add'+className+':add'+className+'' +
        '}';


    fs.writeFile(fileName,code,function(err){
        if(err){
            return callback(err);
        }
        callback();
    });
}




module.exports = {
    createCode:createCode
}