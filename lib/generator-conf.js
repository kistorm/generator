/**
 * Created by user on 2017/4/19.
 */
module.exports = function (info) {
    var projectName = info ? info.projectName : "demo";
    var path_dirs = {
        api: ["./routes", "./services", "./index.js"],
        conf: ["./index.js"],
        lib: ["./db/models", "./core", "./db", "./index.js"],
        example: ["./index.js"],
        util: ["./index.js"]
    }
    var db = info ? info.db : {
        host: "127.0.0.1",
        dialect: 'mysql',
        userName: "root",
        password: "root",
        port: '3306',
        dbName: "bpet",
        directory: null //指定路径的话必须带上directory参数,
    };
    db.directory = path_dirs.lib[0];
    return {projectName: projectName, path_dirs: path_dirs, db: db}
}