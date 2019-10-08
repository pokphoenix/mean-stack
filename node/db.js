const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://127.0.0.1/mean';

mongoose.connect(DATABASE_CONNECTION , {useNewUrlParser:true});

mongoose.connection.on('connected',function(){
    console.log("Mongoose default connection open");
});

mongoose.connection.on('error',function(err){
    console.log("Mongoose default connection error : "+err);
});

mongoose.connection.on('disconnected',function(){
    console.log("Mongoose default connection disconnected");
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection disconnected through app termination");
        process.exit(0);
    })
});


var kittySchema = mongoose.Schema({name:String});

Kitten = exports.Kitten = mongoose.model('Kitten',kittySchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONNECTION);
    console.log('trying to connect to '+DATABASE_CONNECTION);

    var db = mongoose.connection;
    db.on('error',console.error.bind(console,'connection error :We might not be as connected as I thought'));
    db.once('open',function(){
        console.log('We are connected you and I!');
        addRandomCat();
    })
}

var addRandomCat = function(){
    var silence = new Kitten({
        name:'Silence'+Math.random()
    });

    silence.save(function(err,fluffy){
        if(err) return console.error(err);
        console.log('There is a new random cat in the neighborhood');
    })
}