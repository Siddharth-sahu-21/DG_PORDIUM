const  mongoose  = require("mongoose");

const url = "mongodb+srv://siddharthsahu23:pratham@cluster0.3vjia.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connet(url)
.then((result) => {
    console.log('Database is connected');
    
}).catch((err) => {
    console.log('err');
    
});

module.exports= mongoose;


