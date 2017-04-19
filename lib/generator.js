/**
 * Created by user on 2017/4/18.
 */
var fs = require('fs-extra');
var path = require('path');
var async =require('async');
var config = require('./generator-conf.js')();
// console.log(config)
var build = function(){
    var paths = [];
    var projectName = config.projectName;
    var path_dirs = config.path_dirs;
    for(var prototype in path_dirs){
        if(Array.isArray(path_dirs[prototype])){
             for(var i =0;i<path_dirs[prototype].length;i++){
                 var pathName = path.join(__dirname,'..',projectName,'.',prototype,path_dirs[prototype][i])
                 paths.push(pathName);
             }
        }
    }
    async.each(paths,function(p,cb){
        if(p.indexOf('.')<0){
            fs.mkdirp(p,cb);
        } else{
            fs.createFile(p,cb);
        }
    },function(err){
        if(!err){
            return console.log("building files compiled!");
        }
        console.log("building files err!",err.e.stack);
    })
}
//dir build
// conf = new conf({});
// build("project");

//db common build