const mongoose = require('mongoose')

//const DB = process.env.DATABASE_LOCAL
const DB = process.env.DATABASE_REMOTE.replace('<PASSWORD>',process.env.REMOTE_PASSWORD)

//connects mongoose to the local or remote database  to enable CRUD Operations.

const connectToMongo = async()=>{
    
    try{
        const conn = await mongoose.connect(DB, {

            useCreateIndex : true,
            useFindAndModify : false,
            useNewUrlParser : true,
            useUnifiedTopology : true
        }) 

        console.log(`Mongo.db successfully connected to ${conn.connection.host}`)
    }

    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectToMongo
