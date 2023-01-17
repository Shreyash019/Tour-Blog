const app = require('./app');
const connectDatabase = require('./databaseConnection');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
connectDatabase

const PORT = process.env.PORT || 5000
app.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log(`Server running at port:: ${PORT}`)
});