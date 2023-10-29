const mongoose = require('mongoose')

const uri = "mongodb+srv://sajidalhijas:Codler-TodoList@codler-todolist.blsfkxx.mongodb.net/?retryWrites=true&w=majority"
const connection = () => {
    try {
        const connect = mongoose.connect(uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log("DataBase running successfuly..")
    } catch (error) {
        console.log('Error on connecting database : ',error);
        
    }
    
}


module.exports = connection;