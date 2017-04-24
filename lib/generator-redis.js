/**
 * Created by user on 2017/4/19.
 */
var redis = require('redis');
var redis_config = {
    "host": "127.0.0.1",
    "port": 6379
    // ,
    //"password": "pIctur3"
}

var redisClient = redis.createClient(redis_config.port, redis_config.host,  {
    detect_buffers: true
    // ,
    // auth_pass: redis_config.password
});


redisClient.on('error', function (err) {
    console.log('Error ' + err);
})

redisClient.on('connect', function () {
    redisClient.select(1, function () {
    });
    console.log('Redis is ready');

})
// redisClient.auth(redis_config.password, function(){
//     console.log('redis pass');
// });

exports.redisClient = redisClient;